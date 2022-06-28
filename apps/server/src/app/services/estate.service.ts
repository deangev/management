import { ESTATE_API_URL } from '@sagi/core/constants';
import {
  AddressType,
  CreateEstateRequestType,
  EstateType,
  GetEstateRequestType,
  UpdateEstateRequestType,
} from '@sagi/core/types';
import { deleteEmptyKeys, isEmpty } from '@sagi/core/utils';
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

export const updateEstate = async (estateData: UpdateEstateType) => {
  const { floors, apartments, contacts, _id, city, number, street, entry } =
    estateData || {};
  const updatePayload: Partial<UpdateEstateRequestType['body']> = {};

  if (!isEmpty(floors)) updatePayload.floors = floors;
  if (!isEmpty(apartments)) updatePayload.apartments = apartments;
  if (!isEmpty(contacts)) updatePayload.contacts = contacts;

  const address = deleteEmptyKeys({ city, number, street, entry });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  if (!isEmpty(address)) updatePayload.address = address;

  const { data } = await http.put(`/${_id}`, updatePayload);
  return data.updatedEstate;
};

export const deleteEstate = async (estateId: string) => {
  const { data } = await http.put('/', estateId);
  return data;
};

type UpdateEstateType = Pick<
  UpdateEstateRequestType['body'],
  'apartments' | 'floors' | 'contacts'
> & { _id: string } & AddressType;
