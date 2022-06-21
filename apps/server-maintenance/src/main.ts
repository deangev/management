import * as express from 'express';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(process.env['MONGODB_CONNECTION_STRING'] as string, (err) => {
  if (err) throw err;
  console.log('MongoDB connection established!');
});

// app.use('/api/articles', articlesRouter)

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server-maintenance!' });
});

const port = process.env.port || 3002;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
