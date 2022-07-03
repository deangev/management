import {
  createServiceCall,
  getServiceCall,
  getServiceCalls,
} from '../services/serviceCalls.service';

const resolvers = {
  Query: {
    serviceCallsData: (_, args, ctx) => getServiceCalls(args.estateID),
    serviceCallData: (_, args, ctx) => getServiceCall(args.serviceCallID),
  },
  Mutation: {
    createServiceCall: (_, args, ctx) =>
      createServiceCall(args.serviceCallData),
  },
};

export default resolvers;
