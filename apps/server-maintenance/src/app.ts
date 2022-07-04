import express from 'express';
import { config as dotenv_config } from 'dotenv';
import cors from 'cors';
import { ACRouter } from './app/routers'

const app = express()

// MIDDLEWARE
dotenv_config()
app.use(cors());
// Add origin and credentials to cors middleware when finishing integration with FED
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: false }));

// ROUTERS
app.use('/api/ac', ACRouter);

// ERROR CLUSTER
// app.use(errorCluster)

export default app