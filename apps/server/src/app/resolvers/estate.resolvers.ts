import {
  getEstates,
  getEstate,
  createEstate,
  updateEstate,
  deleteEstate,
} from '../services/estate.service';

const resolvers = {
  Query: {
    estatesData: (_, _args, ctx) => getEstates(null, ctx.authHeader),
    estateData: (_, args, ctx) => getEstate(args.estateId, ctx.authHeader),
  },
  Mutation: {
    createEstate: (_, args, ctx) => createEstate(args.estateData, ctx.authHeader),
    updateEstate: (_, args, ctx) => updateEstate(args.estateData, ctx.authHeader),
    deleteEstate: (_, args, ctx) => deleteEstate(args.estateId, ctx.authHeader),
  },

};

export default resolvers;
