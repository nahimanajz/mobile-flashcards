
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

    const card = {answer, question}  
    addCardToDecks(route.params.deckTitle, card).then(data => {
       //route.params.updateCard(card)
      navigation.navigate("detail", { card: card})

   }).catch(err=>alert(JSON.stringify(err)))
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