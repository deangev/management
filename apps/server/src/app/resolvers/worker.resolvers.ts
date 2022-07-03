import {
  createWorker,
  getWorker,
  getWorkers,
  updateWorker,
} from '../services/worker.service';

const resolvers = {
  Query: {
    workersData: (_, _args, ctx) => getWorkers(),
    workerData: (_, args, ctx) => getWorker(args.workerID),
  },
  Mutation: {
    createWorker: (_, args, ctx) => createWorker(args.workerData),
    updateWorker: (_, args, ctx) => updateWorker(args.workerData),
  },
};

export default resolvers;
