import { Router } from 'express'
import {
    createEstate,
    deleteEstate,
    getEstate,
    searchEstates,
    updateEstate
} from '../controllers/estateController'

const estateRouter = Router()

estateRouter.get('/search', searchEstates)
estateRouter.post('/', createEstate)
estateRouter.get('/:id', getEstate)
estateRouter.put('/:id', updateEstate)
estateRouter.delete('/:id', deleteEstate)

export default estateRouter