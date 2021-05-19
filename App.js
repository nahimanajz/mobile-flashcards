import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavs from './navs/BottomNavs';
import Notify from './screens/Notify';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>         
          <BottomNavs />          
          {/* <Notify /> */}
      </SafeAreaProvider>
    </View>
  );

}


