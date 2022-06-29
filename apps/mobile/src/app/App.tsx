import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, View } from 'react-native';
import useRoutes from './useRoutes';

const Stack = createNativeStackNavigator();

export const App = () => {
  const routes = useRoutes();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName={'home'}>
        {routes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{ title: route.title }}
          />
        ))}
      </Stack.Navigator>
    </>
  );
};

export default App;
