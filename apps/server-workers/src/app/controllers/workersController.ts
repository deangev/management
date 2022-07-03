import {
  catchAsync,
  getErrorResponse,
  restrictUpdate,
} from '@management/core/utils';
import { Request, Response } from 'express';
import {
  CreateWorkerRequestType,
  DeleteWorkerRequestType,
  GetWorkerRequestType,
  UpdateWorkerRequestType,
} from '@management/core/types';
import Worker from '../models/WorkerModel';

export const searchWorkers = catchAsync(async (req: Request, res: Response) => {
  const workers = await Worker.find();
  
  if (!workers) throw getErrorResponse(400, 'Workers not found');

  res.status(200).json({ hits: workers.length, workers });
});

export const createWorker = catchAsync(
  async (req: CreateWorkerRequestType, res: Response) => {
    const { name, phoneNumber } = req.body;

    const newWorker = await Worker.create({ name, phoneNumber });

    return res.status(201).json({ worker: newWorker });
  }
);

export const getWorker = catchAsync(
  async (req: GetWorkerRequestType, res: Response) => {
    const { id: workerID } = req.params;

    const worker = await Worker.findById(workerID);
    if (!worker) throw getErrorResponse(400, 'worker not found');

    res.status(200).json({ worker });
  }
);

export const updateWorker = catchAsync(
  async (req: UpdateWorkerRequestType, res: Response) => {
    const { id: workerID } = req.params;

    if (!workerID) return getErrorResponse(400, 'No worker id provided');

    const restrictedBody = restrictUpdate({ ...req.body }, ['name', 'phoneNumber']);

    const query: { $set: typeof restrictedBody } = { $set: {} };

    for (const key in restrictedBody) {
      query['$set'][key] = restrictedBody[key];
    }

    const updatedWorker = await Worker.findOneAndUpdate(
      { _id: workerID },
      query,
      { new: true, runValidators: true }
    );
    return res.status(200).json({ updatedWorker });
  }
);

export const deleteWorker = catchAsync(
  async (req: DeleteWorkerRequestType, res: Response) => {
    const { id: workerID } = req.params;

    if (!workerID) throw getErrorResponse(400, 'No worker id provided')
    await Worker.findByIdAndDelete(workerID);

    res.status(204).json();
  }
);
