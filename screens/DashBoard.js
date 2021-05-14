import React, { useEffect, useState } from "react"
import {View, Text,ScrollView} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import {styles} from '../utils/styles'
import {Card} from 'react-native-shadow-cards'
import {getDecks} from '../utils/data'

export function Dashboard(){
    // TODO: When a user click on deck he must be redirected to deck detail
  
    const[decks, setDecks] = useState({})
    useEffect(() =>{
          getDecks().then(newDecks =>{

              if(Object.keys(newDecks) !== Object.keys(decks)){
                setDecks(newDecks)
              }
          })
    }, [decks])
    const data = Object.values(decks)
   //console.log(data)
    return (
        <ScrollView style={styles.dashboard}>
            {/* This is a list of decks */}
            {
                data.map(({title, questions}) => (                  
                <Card style={[styles.dash]} key={title}>
                    <Text style={[styles.title]}>{title}</Text>
                    <TouchableOpacity >
                <Text style={[styles.subtitle]}>{questions.length} Cards</Text>
                    </TouchableOpacity>
                </Card>
                ))
            }
            
        </ScrollView>
    )
}