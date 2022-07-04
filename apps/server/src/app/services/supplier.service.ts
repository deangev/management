import axios from 'axios';
import { SUPPLIERS_API_URL } from '@management/core/constants';
import {
  CreateSupplierRequestType,
  GetServiceCallRequestType,
  SupplierType,
} from '@management/core/types';

const http = axios.create({
  baseURL: SUPPLIERS_API_URL,
});

export const createSupplier = async (
  supplierData: CreateSupplierRequestType['body']
) => {
  const { name, phoneNumber } = supplierData;

  const createPayload = {
    name,
    phoneNumber,
  };

  const { data } = await http.post('/', createPayload);
  return data?.supplier;
};

export const updateSupplier = async (supplierData: SupplierType) => {
  const { name, phoneNumber, _id } = supplierData;

  const updatePayload = {
    name,
    phoneNumber,
  };

  const { data } = await http.put(`/${_id}`, updatePayload);
  return data?.updatedSupplier;
};

export const getSuppliers = async () => {
  const { data } = await http.get('/search');
  
  return data;
};

export const getSupplier = async (
  supplierID: GetServiceCallRequestType['params']['id']
) => {
  const { data } = await http.get(`/${supplierID}`);
  return data?.supplier;
};
