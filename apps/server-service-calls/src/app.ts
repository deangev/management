import * as express from 'express';
import { config as dotenv_config } from 'dotenv';
import * as cors from 'cors';
import serviceCallsRouter from './app/routers/serviceCallsRouter';

const app = express()

// MIDDLEWARE
dotenv_config()
app.use(cors());
// Add origin and credentials to cors middleware when finishing integration with FED
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: false }));

// ROUTERS
app.use('/api', serviceCallsRouter);

// ERROR CLUSTER
// app.use(errorCluster)

export default app