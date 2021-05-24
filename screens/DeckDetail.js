import React, { useEffect, useState } from 'react'
import { Text, View } from "react-native"
import { SubmitButton } from '../components/SubmitButton'
import { styles } from '../utils/styles'
import * as color from '../utils/colors'
import {deleteDeck} from '../utils/data'

export function DeckDetail ({route, navigation}){
    
    //TODO: Show answer, Calculate Point of User who did a Quiz
    const [cards, setCards] = useState(route.params.deck)
    const [newCard, setNewCard] = useState(null)

    const { deck } = route && route.params
    // alert(JSON.stringify(deck))
    const {title, questions} = deck && deck
    
    useEffect(()=>{
        if(route.params.card){
            setNewCard(route.params.card)                 
            setCards({
            ...cards,
            [cards.title]:{
                questions: cards.questions.concat(newCard)
            }
        })
        }
    },[newCard, cards])
   
    const onAddCard =() =>{        
        navigation.navigate('AddCard',{
            deckTitle: route.params.deck.title,
              
       })
    }
    const onStartQuiz =() =>{       
        navigation.navigate('Quiz',{questions: route.params.deck})
    } 
    const onDeleteDeck =  (title) =>{
         deleteDeck(title).then(deck=>{
           navigation.goBack()
        }).catch(err => console.error(err))
    }

  
  
    return(
        <View style={styles.container}>
            <View>
                 <Text style={styles.title}> {title}</Text>
                <Text style={styles.subtitle}> {questions.length} </Text>
                
            </View>
            <View>
                <SubmitButton label={"Add card"} onPress={onAddCard}  color={`${color.darkPink}`}/>
                <SubmitButton label={"Start Quiz"} onPress={onStartQuiz} color={`${color.purple}`} />
            </View>
            <View>
                <SubmitButton label={"Delete Quiz"} onPress={()=>onDeleteDeck(title)} color={`tomato`} />
            </View>
        </View>
    )
}