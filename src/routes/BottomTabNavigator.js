import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import Home from './TopTabNavigator';
import Categories from '../pages/Categories';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: '#8839CF',
        inactiveTintColor: '#068577',
        activeBackgroundColor: '#45D0C1',
        inactiveBackgroundColor: '#45D0C1',
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Icon name='home' color={color} size={size} />
            ),
       }} />
      <Tab.Screen
       name="Categorias" 
       component={Categories}
       options={{
        tabBarIcon: ({ color, size }) => (
            <Icon name='appstore-o' color={color} size={size} />
        ),
        }} />
      <Tab.Screen
       name="Usuário" 
       component={Profile}
       options={{
        tabBarIcon: ({ color, size }) => (
            <Icon name='user' color={color} size={size} />
        ),
        }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;