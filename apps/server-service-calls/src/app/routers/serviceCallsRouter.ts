import { Router } from 'express'
import {
    searchServiceCalls,
    createServiceCall,
    getServiceCall
} from '../controllers/serviceCallsController'

const serviceCallsRouter = Router()

serviceCallsRouter.get('/search', searchServiceCalls)
serviceCallsRouter.post('/', createServiceCall)
serviceCallsRouter.get('/:id', getServiceCall)
// serviceCallsRouter.put('/:id', updateEstate)
// serviceCallsRouter.delete('/:id', deleteEstate)

export default serviceCallsRouter