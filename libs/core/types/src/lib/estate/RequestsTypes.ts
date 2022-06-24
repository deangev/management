import { EstateType } from "../../"
import { Request } from "express"

export interface GetEstateRequestType extends Request {
    params: { id: EstateType['_id'] }
}

export interface DeleteEstateRequestType extends Request {
    params: { id: EstateType['_id'] }
}

export interface CreateEstateRequestType extends Request {
    body: Omit<EstateType, '_id'>
}

export interface UpdateEstateRequestType extends Request {
    params: { id: EstateType['_id'] }
    body: Omit<EstateType, '_id'>
}