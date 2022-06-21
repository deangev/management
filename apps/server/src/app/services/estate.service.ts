import { ESTATE_API_URL } from '@sagi/core/constants';
import axios from 'axios';

const http = axios.create({
  baseURL: ESTATE_API_URL,
});

//TODO - need to add implementation for token header

export const getEstates = async (_, _authHeader) => {
  // TODO
  // const { data } = await http.get('/');
  // return data;

  return { estates: EstatesMock, estatesCount: 2 };
};

export const getEstate = async (estateId: string, _authHeader) => {
  // TODO
  // const { data } = await http.get(`/${estateId}`);
  // return data;

  return EstatesMock.find((estate) => estate.id === estateId);
};

export const createEstate = async (estateData, _authHeader) => {
  const { data } = await http.post('/', estateData);
  return data;
};

export const updateEstate = async (estateData, _authHeader) => {
  const { data } = await http.put('/', estateData);
  return data;
};

export const deleteEstate = async (estateId: string, _authHeader) => {
  const { data } = await http.put('/', estateId);
  return data;
};


// TODO - remove after estate service implementation
const EstatesMock = [
  {
    id: '1',
    city: 'Haifa',
    street: 'Hertzel',
    number: 4,
    floors: 2,
    apartments: 8,
    contacts: ['123', '456'],
    elevators: 4,
  },
  {
    id: '2',
    city: 'Haifa',
    street: 'Hertzel',
    number: 5,
    floors: 1,
    apartments: 3,
    contacts: ['789', '456'],
    elevators: 4,
  },
  {
    id: '3',
    city: 'Haifa',
    street: 'Hertzel',
    number: 1,
    floors: 3,
    apartments: 12,
    contacts: ['123', '789'],
    elevators: 4,
  },
];
