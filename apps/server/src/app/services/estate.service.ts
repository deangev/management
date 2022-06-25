import { ESTATE_API_URL } from '@sagi/core/constants';
import axios from 'axios';

const http = axios.create({
  baseURL: ESTATE_API_URL,
});

export const getEstates = async (_, _authHeader) => {
  const { data } = await http.get('/search');
  
  return data;
};

export const getEstate = async (estateId: string, _authHeader) => {
  // TODO
  // const { data } = await http.get(`/${estateId}`);
  // return data;
};

export const createEstate = async (estateData, _authHeader) => {
  console.log(estateData);

  // const { data } = await http.post('/', estateData);
  // return data;
};

export const updateEstate = async (estateData, _authHeader) => {
  const { data } = await http.put('/', estateData);
  return data;
};

export const deleteEstate = async (estateId: string, _authHeader) => {
  const { data } = await http.put('/', estateId);
  return data;
};