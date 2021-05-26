import React, { useEffect, useRef, useState } from 'react'
import { Animated, Text, View } from "react-native"
import { SubmitButton } from '../components/SubmitButton'
import { styles } from '../utils/styles'
import * as color from '../utils/colors'
import {deleteDeck} from '../utils/data'

export function DeckDetail ({route, navigation}){
    
    //TODO: Show answer, Calculate Point of User who did a Quiz
    const [deck, setDeck] = useState(route.params.deck)
    const {title, questions} = deck
    const animateValue = useRef( new Animated.Value(0)).current


   useEffect(()=>{    
        if(route.params.card){  
          setDeck({
            ...deck,                    
                questions: deck.questions ? deck.questions.concat(route.params.card): [].concat(route.params.card)
        })
        }
        animate()
   },[route.params.card])
    const onAddCard =() =>{    
        navigation.navigate('AddCard',{
            deckTitle: title, 
       }) 
    }
    const onStartQuiz =() =>{       
        navigation.navigate('Quiz',{questions: deck})
    } 
    const onDeleteDeck =  (title) =>{
         deleteDeck(title).then(deck=>{            
           navigation.goBack()
        }).catch(err => console.error(err))
       
    }   
    const animate =() => (       
        Animated.timing(animateValue, {
            toValue: 90,
            delay: 2000,            
            useNativeDriver: true,
          }).start()
    )

    return(<>
        {
            title &&(
                <View style={styles.container}>            
                    <Animated.View style={{transform: [{ translateY: animateValue }]}}>
                        <Text style={styles.title}> {title} </Text>
                        <Text style={styles.subtitle}> {questions? questions.length: 0} </Text>
                    </Animated.View>
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
        
    </>
    )
}