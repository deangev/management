import { SERVICE_CALLS_API_URL } from "@sagi/core/constants";
import { CreateServiceCallRequestType } from "@sagi/core/types";
import axios from 'axios'

const http = axios.create({
    baseURL: SERVICE_CALLS_API_URL,
});

type ServiceCallDataType = Pick<CreateServiceCallRequestType['body'], 'estateId' | 'type' | 'description' | 'destination'>

export const createServiceCall = async (serviceCallData: ServiceCallDataType) => {
    const { estateId, type, description, destination } = serviceCallData

    const createPayload = {
        estateId,
        type,
        description,
        destination
    }

    const { data } = await http.post('/', createPayload)
    return data?.serviceCall
};