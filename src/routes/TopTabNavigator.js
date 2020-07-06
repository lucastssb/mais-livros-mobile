import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Explore from '../pages/Explore';
import Offline from '../pages/Offline';
import Favorites from '../pages/Favorites';
import HomeHeader from '../components/HomeHeader';
import BookInfo from  '../pages/BookInfo';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Explo = () => {
  return (
          <Stack.Navigator headerMode='none' initialRouteName='Explo'>
          <Stack.Screen name="Explo" component={Explore} />
          <Stack.Screen name="Info" component={BookInfo} />
          </Stack.Navigator>
  );
}

const Fav = () => {
  return (
          <Stack.Navigator headerMode='none' initialRouteName='Fav'>
          <Stack.Screen name="Fav" component={Favorites} />
          <Stack.Screen name="Info" component={BookInfo} />
          </Stack.Navigator>
  );
}

const Off = () => {
  return (
          <Stack.Navigator headerMode='none' initialRouteName='Off'>
          <Stack.Screen name="Off" component={Offline} />
          <Stack.Screen name="Info" component={BookInfo} />
          </Stack.Navigator>
  );
}

const TopTabNavigator = () => {
  return (
    <>
        <HomeHeader/>
        <Tab.Navigator tabBarOptions={{
            style:{backgroundColor: '#45D0C1'},
            activeTintColor: 'white',
            tabStyle: {height: 50},
            inactiveTintColor: '#066557',
            labelStyle: {fontSize: 14, fontWeight: 'bold',},
            indicatorStyle: {backgroundColor: 'white', height: 7, borderTopLeftRadius: 8, borderTopRightRadius: 8}
        }}>
        <Tab.Screen name="Explorar" component={Explo} />
        <Tab.Screen name="Offline" component={Off} />
        <Tab.Screen name="Favoritos" component={Fav} />
        </Tab.Navigator>
    </>
  );
}

export default TopTabNavigator;
