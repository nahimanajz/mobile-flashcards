import React from 'react'
import { Text, View } from "react-native"
import { SubmitButton } from '../components/SubmitButton'
import { styles } from '../utils/styles'
import * as color from '../utils/colors'

export function DeckDetail ({navigation}){
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
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> Deck 1 </Text>
                <Text style={styles.subTitle}> 2 cards </Text>
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