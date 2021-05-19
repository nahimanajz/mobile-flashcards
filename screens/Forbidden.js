import React, { useEffect, useState } from "react"
import {View, Text} from 'react-native'
import { SubmitButton } from "../components/SubmitButton"
import { styles } from "../utils/styles"
import * as color from '../utils/colors'
import ResultPage from "./ResultPage"

export function Forbidden({route}){
    const[showAnswer, setShowAnswer] = useState(false) 
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [incorrectAnswer, setIncorrectAnswer] = useState(0)

    let [count, setCount] = useState(0)
    const [deck] = useState(route.params.questions)
    const countDeckQuestion = deck.questions.length 
    const changeQuestion =() => count === countDeckQuestion-1 ?setCount(0):setCount(count+1)
    
    const handleCorrectAnswer =() =>{
      changeQuestion()
      return setCorrectAnswer(count >= correctAnswer? correctAnswer+1: count)
    }
    const handleIncorrectAnswer =() =>{
        changeQuestion() 
        return setIncorrectAnswer(countDeckQuestion-correctAnswer)
      }
    if(correctAnswer + incorrectAnswer === countDeckQuestion){
        return (
            <ResultPage 
                cp={correctAnswer * 100/ countDeckQuestion} 
                ip={incorrectAnswer * 100/ countDeckQuestion} />
        )
    }
    return (<View style={styles.center}>            

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
                        <SubmitButton onPress={()=>handleCorrectAnswer()} label="Correct" color={`${color.textBlack}`}/>
                        <SubmitButton onPress={()=>handleIncorrectAnswer()} label="Incorrect" color={`tomato`}/>
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