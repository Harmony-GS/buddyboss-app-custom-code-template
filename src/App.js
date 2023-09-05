import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Vista1 from './views/view';
import Vista2 from './views/view2';

import * as Font from 'expo-font'; // If you are using Expo

const Tab = createMaterialTopTabNavigator();

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'TommySoftBlack': require('./assets/fonts/TommySoftBlack.otf'),
        'TommySoftLight': require('./assets/fonts/TommySoftLight.otf'),
      });
    }
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tab.Screen name="Vista1" component={Vista1} />
        <Tab.Screen name="Vista2" component={Vista2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
