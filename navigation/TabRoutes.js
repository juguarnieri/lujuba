import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen'; 
import HomeScreen2 from '../pages/HomeScreen2';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Vendas') {
            iconName = 'cart-outline'; 
          } else if (route.name === 'Curiosidades') {
            iconName = 'information-circle-outline'; 
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Vendas" component={HomeScreen} />
      <Tab.Screen name="Curiosidades" component={HomeScreen2} />
    </Tab.Navigator>
  );
}