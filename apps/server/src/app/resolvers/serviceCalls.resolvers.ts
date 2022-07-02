import { createServiceCall } from "../services/serviceCalls.service";
  
  const resolvers = {
    Mutation: {
      createServiceCall: (_, args, ctx) => createServiceCall(args.serviceCallData),
    },
  };

export default resolvers