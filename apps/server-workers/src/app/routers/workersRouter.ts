import { Router } from 'express';
import {
  createWorker,
  deleteWorker,
  getWorker,
  searchWorkers,
  updateWorker,
} from '../controllers/workersController';

const workersRouter = Router();

workersRouter.get('/search', searchWorkers);
workersRouter.post('/', createWorker);
workersRouter.get('/:id', getWorker);
workersRouter.put('/:id', updateWorker);
workersRouter.delete('/:id', deleteWorker);

export default workersRouter;
