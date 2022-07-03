import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ApolloProvider from './app/ApolloProvider';
import RootApp from './app/App';
import { NativeBaseProvider } from 'native-base';

const App = () => (
  <NavigationContainer>
    <ApolloProvider>
      <NativeBaseProvider>
        <RootApp />
      </NativeBaseProvider>
    </ApolloProvider>
  </NavigationContainer>
);

AppRegistry.registerComponent('Mobile', () => App);
