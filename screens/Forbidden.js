import React, { useEffect, useState } from "react"
import {View, Text} from 'react-native'
import { SubmitButton } from "../components/SubmitButton"
import { styles } from "../utils/styles"
import * as color from '../utils/colors'

export function Forbidden({route}){
    const[showAnswer, setShowAnswer] = useState(false) 

    let [count, setCount] = useState(0)
    const [deck] = useState(route.params.questions)
    const countDeckQuestion = deck.questions.length 
    const changeQuestion =() => count === countDeckQuestion-1 ?setCount(0):setCount(count+1)
    
    return (<View style={styles.content}>
            

            {(deck && deck.questions.length) ? (
                <>
                    <View>
                        <Text>{count+1}/ {countDeckQuestion}</Text>
                    </View>
                    <View style={styles.content}> 
                        <Text  style={styles.title}>
                            {count <= countDeckQuestion-1 && (showAnswer?deck.questions[count].question: deck.questions[count].answer )}
                        </Text>               
                        
                        <SubmitButton onPress={()=> setShowAnswer(!showAnswer)} 
                            style={[styles.subtitle,{color:'tomato', paddingTop:18}]}
                            label={showAnswer? 'Answer': 'question'}
                            color={`${color.darkPink}`}/>
                        <SubmitButton onPress={changeQuestion} label="Correct" color={`${color.textBlack}`}/>
                        <SubmitButton onPress={changeQuestion} label="Incorrect" color={`tomato`}/>
                    </View>
                </>
            ):(
                <Text  style={styles.title}>
                       Sorry You can not take a quiz because there is no cards
                </Text> 
            )}
            
                
        </View>
    )
}