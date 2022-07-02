import { SERVICE_CALLS_API_URL } from "@management/core/constants";
import { CreateServiceCallRequestType } from "@management/core/types";
import axios from 'axios'

const http = axios.create({
    baseURL: SERVICE_CALLS_API_URL,
});

type ServiceCallDataType = Omit<CreateServiceCallRequestType['body'], 'updatedAt' | 'createdAt'>

export const createServiceCall = async (serviceCallData: ServiceCallDataType) => {
    const { estateID, apartment, description, destination, priority, assignee, note, type, images } = serviceCallData

    const createPayload = {
        estateID,
        apartment,
        description,
        destination,
        priority,
        assignee,
        note,
        type,
        images
    }

    const { data } = await http.post('/', createPayload)
    return data?.ServiceCall

};

export const getServiceCalls = async (_, _authHeader) => {
    try {
      const { data } = await http.get('/search');
  
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  