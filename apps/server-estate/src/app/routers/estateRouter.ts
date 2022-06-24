import { Router } from 'express'
import { createEstate, deleteEstate, getEstate, updateEstate } from '../controllers/estateController'
const estateRouter = Router()

estateRouter.get('/:id', getEstate)
estateRouter.get('/search', () => {})
estateRouter.put('/:id', updateEstate)
estateRouter.delete('/:id', deleteEstate)
estateRouter.post('/', createEstate)

export default estateRouter;
