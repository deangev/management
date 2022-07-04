import {
  createSupplier,
  getSupplier,
  getSuppliers,
  updateSupplier,
} from '../services/supplier.service';

const resolvers = {
  Query: {
    suppliersData: (_, _args, ctx) => getSuppliers(),
    supplierData: (_, args, ctx) => getSupplier(args.supplierID),
  },
  Mutation: {
    createSupplier: (_, args, ctx) => createSupplier(args.supplierData),
    updateSupplier: (_, args, ctx) => updateSupplier(args.supplierData),
  },
};

export default resolvers;
