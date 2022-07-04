import { Router } from 'express';
import {
  createSupplier,
  deleteSupplier,
  getSupplier,
  searchSuppliers,
  updateSupplier,
} from '../controllers/suppliersController';

const supplierRouter = Router();

supplierRouter.get('/search', searchSuppliers);
supplierRouter.post('/', createSupplier);
supplierRouter.get('/:id', getSupplier);
supplierRouter.put('/:id', updateSupplier);
supplierRouter.delete('/:id', deleteSupplier);

export default supplierRouter;
