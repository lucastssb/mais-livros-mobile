import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/Signin';
import BottomTabBar from './routes/BottomTabNavigator';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator headerMode='none' initialRouteName='SignIn'>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={BottomTabBar} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default MyStack;