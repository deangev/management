import { Request } from 'express';
import { ServiceCallType } from '../..';

export interface GetServiceCallRequestType extends Request {
  params: { id: ServiceCallType['_id'] };
}

export interface DeleteServiceCallRequestType extends Request {
  params: { id: ServiceCallType['_id'] };
}

export interface CreateServiceCallRequestType extends Request {
  body: Omit<ServiceCallType, '_id'>;
}
export interface UpdateServiceCallRequestType extends Request {
  params: { id: ServiceCallType['_id'] };
  body: Omit<ServiceCallType, '_id'>;
}
