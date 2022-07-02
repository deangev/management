import { Router } from 'express'
import {
    searchServiceCalls,
    createServiceCall,
    getServiceCall,
    updateServiceCall,
    deleteServiceCall
} from '../controllers/serviceCallsController'

const serviceCallsRouter = Router()

serviceCallsRouter.get('/search', searchServiceCalls)
serviceCallsRouter.post('/', createServiceCall)
serviceCallsRouter.get('/:id', getServiceCall)
serviceCallsRouter.put('/:id', updateServiceCall)
serviceCallsRouter.delete('/:id', deleteServiceCall)

export default serviceCallsRouter