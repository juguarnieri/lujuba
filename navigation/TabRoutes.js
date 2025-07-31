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

          if (route.name === 'Julia') {
            iconName = 'person-circle-outline';
          } else if (route.name === 'Luiza') {
            iconName = 'person-circle-outline';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'gray', 
        headerTitleAlign: 'center', 
      })}
    >
      <Tab.Screen name="Julia" component={HomeScreen} />
      <Tab.Screen name="Luiza" component={HomeScreen2} />
    </Tab.Navigator>
  );
}