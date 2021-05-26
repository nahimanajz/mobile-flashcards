import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dashboard } from '../screens/DashBoard'
import { NavigationContainer } from '@react-navigation/native';
import{Ionicons,FontAwesome } from '@expo/vector-icons'
import * as color from '../utils/colors';
import { StackNavs } from './StackNavs';

const Tab = createBottomTabNavigator();

export default function BottomNavs() {
  return (
    <NavigationContainer style={{backgroundColor:color.purple}}>
        <Tab.Navigator 
        initialRouteName='Dashboard'
        tabBarOptions={{          
          activeTintColor:color.pink,        
          labelPosition:'below-icon',
          labelStyle:{
            fontSize: 14,
            
          }
          
        }}
        
        >
        <Tab.Screen name="Decks" component={Dashboard} 
            options={{
              tabBarIcon: ({color, size})=><FontAwesome name="dashboard" size={35} color={color} />
          }}
        />
        <Tab.Screen name="stacks" component={StackNavs}         
          options={{
           
           tabBarLabel:"Add Deck",
            tabBarIcon: ({color, size})=><Ionicons name="md-add-circle-outline" size={40} color={color} />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}