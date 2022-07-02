import React, { ReactNode } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloClientProvider,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const link = new HttpLink({
  uri: 'http://10.0.2.2:3000/api',
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) console.log(graphQLErrors);

  graphQLErrors.forEach(({ message, locations, path }) =>
    console.log(
      `[GraphQL error]: Message: ${message}, Location: line - ${locations?.[0]?.line}, column: ${locations?.[0]?.column} , Path: ${path}`
    )
  );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: errorLink.concat(link),
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }: { children: ReactNode }) => (
  <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
);

export default ApolloProvider;
