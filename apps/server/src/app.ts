import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import * as path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { estateResolvers, serviceCallsResolvers } from './app/resolvers';
import { AxiosError } from 'axios';

const typesArray = loadFilesSync(
  path.join(__dirname, '../../../apps/server/src/app/**/*.graphql')
);
const typeDefs = mergeTypeDefs(typesArray);

const resolversArray = [estateResolvers, serviceCallsResolvers];
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = new ApolloServer({
  schema,
  formatError: (err) => {
    try {
      const errorAxios = err.extensions.exception as AxiosError;
      return errorAxios.response.data;
    } catch (error) {
      return error;
    }
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
