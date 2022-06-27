import React, { ReactNode } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloClientProvider,
  HttpLink,
} from '@apollo/client';

const link = new HttpLink({
  uri: 'http://10.0.2.2:3000/api',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }: { children: ReactNode }) => (
  <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
);

export default ApolloProvider;
