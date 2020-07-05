import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Explore from '../pages/Explore';
import Offline from '../pages/Offline';
import Favorites from '../pages/Favorites';
import HomeHeader from '../components/HomeHeader';

const Tab = createMaterialTopTabNavigator();

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
        <Tab.Screen name="Explorar" component={Explore} />
        <Tab.Screen name="Offline" component={Offline} />
        <Tab.Screen name="Favoritos" component={Favorites} />
        </Tab.Navigator>
    </>
  );
}

export default TopTabNavigator;
