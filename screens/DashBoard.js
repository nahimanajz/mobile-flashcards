import React, { useEffect, useState } from "react"
import {View, Text,ScrollView} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import {styles} from '../utils/styles'
import {Card} from 'react-native-shadow-cards'
import {getDecks} from '../utils/data'

export function Dashboard({navigation}){
    // TODO: When a user click on deck he must be redirected to deck detail
  
    const[decks, setDecks] = useState({})
    useEffect(() =>{
        getDecks().then(newDecks =>{
              if(Object.keys(newDecks) !== Object.keys(decks)){
                setDecks(newDecks)
              }
          }).catch(err =>console.log(`From dashboard:${err.message}`))
    }, [decks])
    const data = Object.values(decks)
    return (
        <ScrollView style={styles.dashboard}>
            {/* This is a list of decks */}
            {
                data.map((deck) => (                  
                <Card style={[styles.dash]} key={deck.title}>
                    <Text style={[styles.title]}>{deck.title}</Text>
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate("stacks", {
                                    screen:'detail',
                                    initial:false,
                                    params:{
                                        title:deck.title,
                                        questions: deck.questions.length,
                                        deck
                                        }
                                    })}
                                    >

                <Text style={[styles.subtitle]}>{deck.questions.length} Cards</Text>
                    </TouchableOpacity>
                </Card>
                ))
            }
            
        </ScrollView>
    )
}