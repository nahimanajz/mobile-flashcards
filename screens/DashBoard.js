import React, { useEffect, useState } from "react"
import {View, Text,ScrollView} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import {styles} from '../utils/styles'
import {Card} from 'react-native-shadow-cards'
import {getDecks} from '../utils/data'

export function Dashboard({navigation}){
  
    const[decks, setDecks] = useState({})
    useEffect(() =>{
        getDecks().then(newDecks =>{
            if(newDecks){
                if(Object.keys(newDecks) !== Object.keys(decks)){
                    setDecks(newDecks)
                  }
            }
              
          }).catch(err =>console.log(`From dashboard:${err.message}`))
    }, [decks])
    const data = Object.values(decks)
    
    return (
        <ScrollView style={styles.dashboard}>            
            {
                 data.map((deck) => deck && (                  
                <Card style={[styles.dash]}>
                    <Text style={[styles.title]} key={deck.title}>{deck.title}</Text>
                        <TouchableOpacity 
                            onPress={()=> navigation.navigate("stacks", {
                                        screen:'detail',
                                        initial:false,
                                        params:{                                        
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