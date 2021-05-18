import React, { useState } from 'react'
import { Text, View } from "react-native"
import { SubmitButton } from '../components/SubmitButton'
import { styles } from '../utils/styles'
import * as color from '../utils/colors'
import {deleteDeck} from '../utils/data'

export function DeckDetail ({route, navigation}){
    const onAddCard =() =>{        
        navigation.navigate('AddCard',{deckTitle: route.params.title})
    }
    const onStartQuiz =() =>{       
        navigation.navigate('forbidden',{questions: route.params.deck})
    }
    const onDeleteDeck =(title) =>(
        deleteDeck(title).then(deck=>{
           navigation.navigate("detail")
        }).catch(err => console.error(err))
    )

    const { title,questions,deck } = route && route.params;
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> {title}</Text>
                <Text style={styles.subtitle}> {questions} </Text>
                <Text style={styles.subtitle}>  </Text>
            </View>
            <View>
                <SubmitButton label={"Add card"} onPress={onAddCard}  color={`${color.darkPink}`}/>
                <SubmitButton label={"Start Quiz"} onPress={onStartQuiz} color={`${color.purple}`} />
            </View>
            <View>
                <SubmitButton label={"Delete Quiz"} onPress={onDeleteDeck(title)} color={`tomato`} />
            </View>
        </View>
    )
}