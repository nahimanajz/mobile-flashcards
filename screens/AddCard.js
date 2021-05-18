
import React,{useState} from "react"
import {View, Text} from 'react-native'
import { EditText } from "../components/EditText"
import { SubmitButton } from "../components/SubmitButton"
import { styles } from "../utils/styles"
import * as color from '../utils/colors'
import {addCardToDecks} from '../utils/data'



export function AddCard({navigation, route}){
  const [question, setQuestion] = useState(null)
  const [answer, setAnswer] = useState(null)
    const submitCard =()=> {
        const data = {answer, question}
        addCardToDecks(route.params.deckTitle, data).then(data => {
           navigation.goBack()
        })
    }
    return (
        <View style={styles.container}>
            <View>
                <EditText onChangeText={(question)=>setQuestion(question)} placeholder={'question'} />
                <EditText onChangeText={(answer)=>setAnswer(answer)} placeholder={'answer'} />
            </View>
            <View />
            <View>
                <SubmitButton onPress={submitCard} label={"Save card"} color={color.darkPink} />
            </View>
        </View>
    )
}