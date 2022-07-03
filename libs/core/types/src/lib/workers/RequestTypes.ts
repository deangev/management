import { Request } from 'express';
import { WorkerType } from './WorkerType';

export interface GetWorkerRequestType extends Request {
  params: { id: WorkerType['_id'] };
}

export interface DeleteWorkerRequestType extends Request {
  params: { id: WorkerType['_id'] };
}

export interface CreateWorkerRequestType extends Request {
  body: Omit<WorkerType, '_id'>;
}
export interface UpdateWorkerRequestType extends Request {
  params: { id: WorkerType['_id'] };
  body: Omit<WorkerType, '_id'>;
}
