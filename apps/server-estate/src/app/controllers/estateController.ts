import Estate from '../models/EstateModel';
import { catchAsync, getErrorResponse, restrictUpdate } from '@sagi/core/utils';
import { Request, Response } from 'express';
import {
  AddressType,
  CreateEstateRequestType,
  DeleteEstateRequestType,
  GetEstateRequestType,
  UpdateEstateRequestType,
} from '@sagi/core/types';

export const searchEstates = catchAsync(async (req: Request, res: Response) => {
  const requestQuery = { ...req.query }
  const excludeFields = ['page', 'sort', 'limit', 'fields']
  excludeFields.forEach(f => delete requestQuery[f])

  const estates = await Estate.find(requestQuery);

  if (!estates) throw getErrorResponse(400, 'estates not found');

  res.status(200).json({ hits: estates.length, estates });
});

export const createEstate = catchAsync(
  async (req: CreateEstateRequestType, res: Response) => {
    const { address, apartments, floors } = req.body;

    if (!address) throw getErrorResponse(400, 'please provide an address');
    if (!apartments) throw getErrorResponse(400, 'please provide apartments');
    if (!floors) throw getErrorResponse(400, 'please provide floors');

    const existingAddressEstate = await Estate.findOne({ address });
    if (existingAddressEstate) {
      throw getErrorResponse(400, 'Address is unique to each estate');
    }

    const newEstate = await Estate.create({ address, apartments, floors });

    return res.status(201).json({ estate: newEstate });
  }
);

export const getEstate = catchAsync(
  async (req: GetEstateRequestType, res: Response) => {
    const { id: estateID } = req.params;

    const estate = await Estate.findById(estateID);
    if (!estate) throw getErrorResponse(400, 'estate not found');

    res.status(200).json({ estate });
  }
);

export const updateEstate = catchAsync(
  async (req: UpdateEstateRequestType, res: Response) => {
    const { id: estateID } = req.params;
    const restrictedBody = restrictUpdate({ ...req.body }, [
      'address',
      'floors',
      'apartments',
    ]);

    const getUpdateQuery = () => {
      const query: { $set: typeof restrictedBody } = { $set: {} };

      if (restrictedBody.address) {
        const address: any = restrictedBody.address;
        for (const k in address) {
          const key = `address.${k}`;
          query['$set'][key] = address[k];
        }
      }

      if (restrictedBody.apartments) {
        query['$set'].apartments = restrictedBody.apartments;
      }

      if (restrictedBody.floors) {
        query['$set'].floors = restrictedBody.floors;
      }

      return query;
    };

    const updatedEstate = await Estate.findOneAndUpdate(
      { _id: estateID },
      getUpdateQuery(),
      { new: true, runValidators: true }
    );
    return res.status(200).json({ updatedEstate });
  }
);

export const deleteEstate = catchAsync(
  async (req: DeleteEstateRequestType, res: Response) => {
    const { id: estateID } = req.params;

    await Estate.findByIdAndDelete(estateID);

    res.status(204).json();
  }
);
