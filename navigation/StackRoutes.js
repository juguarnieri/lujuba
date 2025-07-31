import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';
import HomeScreen from '../pages/HomeScreen';
import HomeScreen2 from '../pages/HomeScreen2';
import DetailScreen from '../pages/DetailScreen';
import DetailScreen2 from '../pages/DetailScreen2';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Página da Julia' }}
      />
      <Stack.Screen
        name="HomeScreen2"
        component={HomeScreen2}
        options={{ title: 'Página da Luiza' }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: 'Detalhes da Babi' }}
      />
      <Stack.Screen
        name="DetailScreen2"
        component={DetailScreen2}
        options={{ title: 'Detalhes da Luiza' }}
      />
    </Stack.Navigator>
  );
}