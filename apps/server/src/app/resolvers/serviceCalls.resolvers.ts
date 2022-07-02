import { createServiceCall, getServiceCall, getServiceCalls } from "../services/serviceCalls.service";

const resolvers = {
  Query: {
    estateServiceCallsData: (_, args, ctx) => getServiceCalls(null, ctx.authHeader, args.estateID),
    serviceCallsData: (_, _args, ctx) => getServiceCalls(null, ctx.authHeader),
    serviceCallData: (_, args, ctx) => getServiceCall(args.serviceCallID),
  },
  Mutation: {
    createServiceCall: (_, args, ctx) => createServiceCall(args.serviceCallData),
  },
};

export default resolvers