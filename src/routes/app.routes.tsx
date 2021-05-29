import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import AddCity from '../screens/AddCity';

import {colors} from '../config/styles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddCity" component={AddCity} />
    </Stack.Navigator>
  );
}
