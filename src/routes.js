import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/Signin';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Login" component={SignIn} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;