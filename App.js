import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BottomNavs from './navs/BottomNavs'

import { notification } from './utils/notification'

export default function App() {
  //useEffect(() =>notification())
  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>         
          <BottomNavs />          
          
      </SafeAreaProvider>
    </View>
  )

}


