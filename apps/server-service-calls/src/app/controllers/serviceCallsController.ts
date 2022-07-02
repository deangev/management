import {
  catchAsync,
  deleteEmptyKeys,
  getErrorResponse,
  restrictUpdate,
} from '@management/core/utils';
import { Request, Response } from 'express';
import {
  CreateServiceCallRequestType,
  DeleteServiceCallRequestType,
  GetServiceCallRequestType,
  UpdateServiceCallRequestType,
} from '@management/core/types';
import ServiceCall from '../models/serviceCallModel';

export const searchServiceCalls = catchAsync(
  async (req: Request, res: Response) => {
    const queryParams = deleteEmptyKeys(
      restrictUpdate(req.query, ['estateID'])
    );
    const query: any = {};

    //TODO - should be moved to util if the search will be more complicated
    if (queryParams.estateID) query.estateID = queryParams.estateID;

    const serviceCalls = await ServiceCall.find(query);
    if (!serviceCalls) {
      return res.status(400).json({ message: 'estates not found' });
    }

    res.status(200).json({ hits: serviceCalls.length, serviceCalls });
  }
);

export const createServiceCall = catchAsync(
  async (req: CreateServiceCallRequestType, res: Response) => {
    const {
      estateID,
      apartment,
      assignee,
      description,
      destination,
      images,
      note,
      priority,
      type,
    } = req.body;

    const newServiceCall = await ServiceCall.create({
      estateID,
      apartment,
      assignee,
      description,
      destination,
      images,
      note,
      priority,
      type,
    });

    return res.status(201).json({ ServiceCall: newServiceCall });
  }
);

export const getServiceCall = catchAsync(
  async (req: GetServiceCallRequestType, res: Response) => {
    const { id: serviceCallID } = req.params;

    const serviceCall = await ServiceCall.findById(serviceCallID);
    if (!serviceCall)
      return res.status(400).json({ message: 'estate not found' });

    return res.status(200).json({ serviceCall });
  }
);

export const updateServiceCall = catchAsync(
  async (req: UpdateServiceCallRequestType, res: Response) => {
    const { id: serviceCallID } = req.params;

    if (!serviceCallID) return getErrorResponse(400, 'No service call id provided')

    const restrictedBody = deleteEmptyKeys(
      restrictUpdate({ ...req.body }, [
        'apartment',
        'description',
        'destination',
        'priority',
        'assignee',
        'note',
        'type',
        'images',
      ])
    );

    const query: { $set: typeof restrictedBody } = { $set: {} };

    for (const key in restrictedBody) {
      if (restrictedBody[key]) {
        query['$set'][key] = restrictedBody[key];
      }
    }

    if (!Object.keys(query['$set']).length) {
      throw getErrorResponse(400, 'No fields to update')
    }
    const updatedEstate = await ServiceCall.findOneAndUpdate(
      { _id: serviceCallID },
      query,
      { new: true, runValidators: true }
    );

    return res.status(200).json({ updatedEstate });
  }
);

export const deleteServiceCall = catchAsync(
  async (req: DeleteServiceCallRequestType, res: Response) => {
    const { id: serviceCallID } = req.params;

    if (!serviceCallID) throw getErrorResponse(400, 'No service call id provided')

    await ServiceCall.findByIdAndDelete(serviceCallID);

    res.status(204).json();
  }
);
