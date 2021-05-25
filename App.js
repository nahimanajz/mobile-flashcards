import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { View} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BottomNavs from './navs/BottomNavs'

import { scheduleAndCancel } from './utils/notification'
import { checkSolvedQuestions } from './utils/data'

export default function App() {
  //useEffect(() =>) //NRoticiation will popup only if user logged no data at that day
  useEffect(() =>{    
    checkSolvedQuestions().then((res) =>{      
      if(res.notify){
        scheduleAndCancel()
      }
    }).catch(err =>console.log(err))
  })
  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>         
          <BottomNavs />         
          
      </SafeAreaProvider>
    </View>
  )

}
