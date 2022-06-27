import React from 'react';
import { AppRegistry } from 'react-native';
import ApolloProvider from './app/ApolloProvider';
import RootApp from './app/App';

const App = () => (
  <ApolloProvider>
    <RootApp />
  </ApolloProvider>
);

AppRegistry.registerComponent('Mobile', () => App);
