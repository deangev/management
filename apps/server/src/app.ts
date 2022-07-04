import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import * as path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import {
  estateResolvers,
  serviceCallsResolvers,
  workerResolvers,
  supplierResolvers,
} from './app/resolvers';

const typesArray = loadFilesSync(
  path.join(__dirname, '../../../apps/server/src/app/**/*.graphql')
);
const typeDefs = mergeTypeDefs(typesArray);

const resolversArray = [
  estateResolvers,
  serviceCallsResolvers,
  workerResolvers,
  supplierResolvers,
];
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = new ApolloServer({
  schema,
  formatError: (err) => {
    console.log(err);
    return err;
  },
  context: ({ req, res }) => {
    const token = req.headers.authorization || '';

    // try to retrieve a user with the token
    // const user = getUser(token);

    // optionally block the user
    // we could also check user roles/permissions here
    // if (!user) throw new AuthenticationError('you must be logged in');

    // add the user to the context
    // return { user };
    return {
      req,
      res,
      authHeader: {
        authorization: token,
      },
    };
  },
});

export default app;
