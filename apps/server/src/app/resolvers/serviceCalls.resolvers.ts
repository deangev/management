import { createServiceCall, getServiceCalls } from "../services/serviceCalls.service";
  
  const resolvers = {
    Query: {
      serviceCallsData: (_, _args, ctx) => getServiceCalls(null, ctx.authHeader),
    },
    Mutation: {
      createServiceCall: (_, args, ctx) => createServiceCall(args.serviceCallData),
    },
  };

export default resolvers