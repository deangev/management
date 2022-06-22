import { ReactNode } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloClientProvider,
  from,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { MAIN_API_URL } from '@sagi/core/constants';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    graphqlErrors.map(({ message }) => {
      console.log(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: MAIN_API_URL,
  }),
]);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }: { children: ReactNode }) => (
  <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
);

export default ApolloProvider;
