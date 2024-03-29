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
    estateData: (_, args, ctx) => getEstate(args.estateID),
  },
  Mutation: {
    createEstate: (_, args, ctx) => createEstate(args.estateData),
    updateEstate: (_, args, ctx) => updateEstate(args.estateData),
    deleteEstate: (_, args, ctx) => deleteEstate(args.estateID),
  },

};

export default resolvers;
