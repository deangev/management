import { SERVICE_CALLS_API_URL } from "@management/core/constants";
import { CreateServiceCallRequestType } from "@management/core/types";
import axios from 'axios'

const http = axios.create({
    baseURL: SERVICE_CALLS_API_URL,
});

type ServiceCallDataType = Pick<CreateServiceCallRequestType['body'], 'estateID' | 'type' | 'description' | 'destination'>

export const createServiceCall = async (serviceCallData: ServiceCallDataType) => {
    const { estateID, type, description, destination } = serviceCallData

    const createPayload = {
        estateID,
        type,
        description,
        destination
    }

    const { data } = await http.post('/', createPayload)
    return data?.serviceCall
};