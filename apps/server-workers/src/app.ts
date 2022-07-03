import * as express from 'express';
import * as cors from 'cors';
import { config as dotenv_config } from 'dotenv';
import workerRouter from './app/routers/workersRouter';

const app = express();

// MIDDLEWARE
dotenv_config();
app.use(cors());
// Add origin and credentials to cors middleware when finishing integration with FED
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// ROUTERS
app.use('/api', workerRouter);

// ERROR CLUSTER
// app.use(errorCluster)

export default app;
