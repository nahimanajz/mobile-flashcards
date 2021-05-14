import React from 'react'
import { Text, View } from "react-native"
import { SubmitButton } from '../components/SubmitButton'
import { styles } from '../utils/styles'
import * as color from '../utils/colors'

export function DeckDetail ({route, navigation}){
    // Todo deck has title and
    // delete button
    // button to start a quiz
    const onAddCard =() =>{
        navigation.navigate('AddCard')
    }
    const onDeleteDeck =() =>{

    }
    const onStartQuiz =() =>{
        navigation.navigate('forbidden')
    }
    //length of cards assigned to it
    
    const { title,questions } = route && route.params;
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> {title}</Text>
                <Text style={styles.subtitle}> {questions} </Text>
            </View>
            <View>
                <SubmitButton label={"Add card"} onPress={onAddCard}  color={`${color.darkPink}`}/>
                <SubmitButton label={"Start Quiz"} onPress={onStartQuiz} color={`${color.purple}`} />
            </View>
            <View>
                <SubmitButton label={"Delete Quiz"} onPress={onDeleteDeck} color={`tomato`} />
            </View>
        </View>
    )
}