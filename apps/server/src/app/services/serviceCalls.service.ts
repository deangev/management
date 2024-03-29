import axios from 'axios';
import { SERVICE_CALLS_API_URL } from '@management/core/constants';
import {
  CreateServiceCallRequestType,
  GetServiceCallRequestType,
  ServiceCallType,
} from '@management/core/types';

const http = axios.create({
  baseURL: SERVICE_CALLS_API_URL,
});

type ServiceCallCreateDataType = Omit<
  CreateServiceCallRequestType['body'],
  'updatedAt' | 'createdAt'
>;

export const createServiceCall = async (
  serviceCallData: ServiceCallCreateDataType
) => {
  const {
    estateID,
    apartment,
    description,
    destination,
    priority,
    assignee,
    note,
    type,
    images,
  } = serviceCallData;

  const createPayload = {
    estateID,
    apartment,
    description,
    destination,
    priority,
    assignee,
    note,
    type,
    images,
  };

  const { data } = await http.post('/', createPayload);
  return data?.ServiceCall;
};

export const updateServiceCall = async (serviceCallData: ServiceCallType) => {
  const {
    _id,
    estateID,
    apartment,
    description,
    destination,
    priority,
    assignee,
    note,
    type,
    images,
  } = serviceCallData;

  const updatePayload = {
    estateID,
    apartment,
    description,
    destination,
    priority,
    assignee,
    note,
    type,
    images,
  };

  const { data } = await http.post(`/${_id}`, updatePayload);
  return data?.ServiceCall;
};

export const getServiceCalls = async (estateID?: string) => {
  const { data } = await http.get('/search', { params: { estateID } });
  return data;
};

export const getServiceCall = async (
  serviceCallID: GetServiceCallRequestType['params']['id']
) => {
  const { data } = await http.get(`/${serviceCallID}`);
  return data?.serviceCall;
};
