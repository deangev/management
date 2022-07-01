import { catchAsync, restrictUpdate } from '@sagi/core/utils';
import { Request, Response } from 'express';
import {
  CreateServiceCallRequestType,
  GetServiceCallRequestType,
} from '@sagi/core/types';
import ServiceCall from '../models/serviceCallModel';

export const searchServiceCalls = catchAsync(
  async (req: Request, res: Response) => {
    const restrictedBody = restrictUpdate({ ...req.body }, [
      'address',
      'floors',
      'apartments',
    ]);
    const serviceCalls = await ServiceCall.find({});
    if (!serviceCalls) {
      return res.status(400).json({ message: 'estates not found' });
    }

    res.status(200).json({ hits: serviceCalls.length, serviceCalls });
  }
);

export const createServiceCall = catchAsync(
  async (req: CreateServiceCallRequestType, res: Response) => {
    const {
      estateId,
      apartment,
      assignee,
      description,
      destination,
      images,
      note,
      priority,
      type,
    } = req.body;

    if (!estateId) {
      return res.status(400).json({ message: 'please provide an assignee' });
    }
    if (!apartment) {
      return res.status(400).json({ message: 'please provide an assignee' });
    }

    if (!description) {
      return res.status(400).json({ message: 'please provide a description' });
    }

    if (!destination) {
      return res.status(400).json({ message: 'please provide a destination' });
    }

    const newServiceCall = await ServiceCall.create({
      estateId,
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

// export const updateServiceCall = catchAsync(
//   async (req: UpdateEstateRequestType, res: Response) => {
//     const { id: estateID } = req.params;
//     const restrictedBody = restrictUpdate({ ...req.body }, [
//       'address',
//       'floors',
//       'apartments',
//     ]);

//     const getUpdateQuery = () => {
//       const query = { $set: {} };

//       if (restrictedBody.address) {
//         const address: any = restrictedBody.address;
//         for (const k in address) {
//           const key = `address.${k}`;
//           query['$set'] = { ...query['$set'], [key]: address[k] };
//         }
//       }

//       if (restrictedBody.apartments)
//         query['$set'] = {
//           ...query['$set'],
//           apartments: restrictedBody.apartments,
//         };
//       if (restrictedBody.floors)
//         query['$set'] = { ...query['$set'], floors: restrictedBody.floors };

//       return query;
//     };

//     const updatedEstate = await Estate.findOneAndUpdate(
//       { _id: estateID },
//       getUpdateQuery(),
//       { new: true, runValidators: true }
//     );
//     return res.status(200).json({ updatedEstate });
//   }
// );

// export const deleteEstate = catchAsync(
//   async (req: DeleteEstateRequestType, res: Response) => {
//     const { id: estateID } = req.params;

//     await Estate.findByIdAndDelete(estateID);

//     res.status(204).json();
//   }
// );
