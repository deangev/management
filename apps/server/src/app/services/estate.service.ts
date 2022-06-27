import { ESTATE_API_URL } from '@sagi/core/constants';
import {
  AddressType,
  CreateEstateRequestType,
  EstateType,
  GetEstateRequestType,
} from '@sagi/core/types';
import axios from 'axios';

const http = axios.create({
  baseURL: ESTATE_API_URL,
});

export const getEstates = async (_, _authHeader) => {
  const { data } = await http.get('/search');

  return data;
};

export const getEstate = async (
  estateId: GetEstateRequestType['params']['id']
) => {
  const { data } = await http.get(`/${estateId}`);
  return data?.estate;
};

export const createEstate = async (
  estateData: Pick<CreateEstateRequestType['body'], 'apartments' | 'floors'> &
    AddressType
) => {
  const { city, street, number, entry, floors, apartments } = estateData || {};
  const createPayload = {
    address: {
      city,
      street,
      number,
      entry,
    },
    floors,
    apartments,
  };

  const { data } = await http.post('/', createPayload);

  return data?.estate;
};

export const updateEstate = async (estateData, _authHeader) => {
  const { data } = await http.put('/', estateData);
  return data;
};

export const deleteEstate = async (estateId: string, _authHeader) => {
  const { data } = await http.put('/', estateId);
  return data;
};
