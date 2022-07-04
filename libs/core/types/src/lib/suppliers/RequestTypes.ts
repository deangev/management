import { Request } from 'express';
import { SupplierType } from './SupplierType';

export interface GetSupplierRequestType extends Request {
  params: { id: SupplierType['_id'] };
}

export interface DeleteSupplierRequestType extends Request {
  params: { id: SupplierType['_id'] };
}

export interface CreateSupplierRequestType extends Request {
  body: Omit<SupplierType, '_id'>;
}
export interface UpdateSupplierRequestType extends Request {
  params: { id: SupplierType['_id'] };
  body: Omit<SupplierType, '_id'>;
}
