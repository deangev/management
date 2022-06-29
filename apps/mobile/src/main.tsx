import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ApolloProvider from './app/ApolloProvider';
import RootApp from './app/App';

const App = () => (
  <NavigationContainer>
    <ApolloProvider>
      <RootApp />
    </ApolloProvider>
  </NavigationContainer>
);

AppRegistry.registerComponent('Mobile', () => App);
