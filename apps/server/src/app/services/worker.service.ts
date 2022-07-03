import axios from 'axios';
import { WORKERS_API_URL } from '@management/core/constants';
import {
  CreateWorkerRequestType,
  GetServiceCallRequestType,
  WorkerType,
} from '@management/core/types';

const http = axios.create({
  baseURL: WORKERS_API_URL,
});

export const createWorker = async (
  workerData: CreateWorkerRequestType['body']
) => {
  const { name, phoneNumber } = workerData;

  const createPayload = {
    name,
    phoneNumber,
  };

  const { data } = await http.post('/', createPayload);
  return data?.worker;
};

export const updateWorker = async (workerData: WorkerType) => {
  const { name, phoneNumber, _id } = workerData;

  const updatePayload = {
    name,
    phoneNumber,
  };

  const { data } = await http.put(`/${_id}`, updatePayload);
  return data?.updatedWorker;
};

export const getWorkers = async () => {
  const { data } = await http.get('/search');
  return data;
};

export const getWorker = async (
  workerID: GetServiceCallRequestType['params']['id']
) => {
  const { data } = await http.get(`/${workerID}`);
  return data?.worker;
};
