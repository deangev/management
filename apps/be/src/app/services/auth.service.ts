// import { API_AUTH_URL } from '@assignment/constants';
import axios from 'axios';

const http = axios.create({
  // baseURL: API_AUTH_URL,
});

export const login = async (input) => {
  const { data } = await http.post('/login', input);
  return data;
};

export const register = async (input) => {
  const { data } = await http.post('/', input);
  return data;
};
