import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavs from './navs/BottomNavs';



export default function App() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>         
          <BottomNavs />          
      </SafeAreaProvider>
    </View>
  );

}


