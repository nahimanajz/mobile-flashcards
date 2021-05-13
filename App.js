import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavs from './navs/BottomNavs';
import { StackNavs } from './navs/StackNavs';
import { styles } from './utils/styles';


export default function App() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>
         {/* <StackNavs /> */}
          <BottomNavs />
          
      </SafeAreaProvider>
    </View>
  );

}


