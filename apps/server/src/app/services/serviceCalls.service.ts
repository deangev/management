import { SERVICE_CALLS_API_URL } from "@sagi/core/constants";
import { CreateServiceCallRequestType } from "@sagi/core/types";
import axios from 'axios'

const http = axios.create({
    baseURL: SERVICE_CALLS_API_URL,
});

type ServiceCallDataType = Omit<CreateServiceCallRequestType['body'], 'updatedAt' | 'createdAt'>

export const createServiceCall = async (serviceCallData: ServiceCallDataType) => {
    const { estateId, apartment, description, destination, priority, assignee, note, type, images } = serviceCallData

    const createPayload = {
        estateId,
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