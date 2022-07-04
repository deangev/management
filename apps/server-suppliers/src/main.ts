import app from './app';
import { connect as mongoConnect } from 'mongoose';

const port = process.env.port || 3005;

const MONGO_URI = process.env.MONGO_URI.replace(
  '<password>',
  process.env.MONGO_PASSWORD
);
const MONGO_CONNECTION_SUCCESS = `Suppliers service is connected with the MongoDB cluster!`;
const MONGO_CONNECTION_FAIL = `Connection error - Suppliers service failed to connect with the MongoDB cluster...`;
const SERVER_SUCCESS = `${process.env.NODE_ENV} - Suppliers service is listening on port ${port}`;
const SERVER_FAIL = `${process.env.NODE} = Suppliers service failed on port ${port}...`;

mongoConnect(MONGO_URI)
  .then((): void => {
    console.log(MONGO_CONNECTION_SUCCESS);
  })
  .catch((): void => {
    console.log(MONGO_CONNECTION_FAIL);
  });

app
  .listen(port, (): void => {
    console.log(SERVER_SUCCESS);
  })
  .on('error', (): void => {
    console.log(SERVER_FAIL);
  });

// We might need to stop listening to requests on unexpected exceptions`~
