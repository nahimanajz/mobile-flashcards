import React, { useEffect, useState } from "react"
import {View, Text} from 'react-native'
import { SubmitButton } from "../components/SubmitButton"
import { styles } from "../utils/styles"
import * as color from '../utils/colors'
import ResultPage from "./ResultPage"
import { saveResult } from "../utils/data"
      /**
         * TODO: do a backend to keep solved questions [add timestamp, inorder to decide when to send notification]
         *  Return result page if allquestions are corrected and append reset prop
         * add n
         */

export function QuizPage({route, navigation}){
    const[showAnswer, setShowAnswer] = useState(false) 
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [incorrectAnswer, setIncorrectAnswer] = useState(0)

    let [count, setCount] = useState(0)
    const [deck, setDeck] = useState(route.params.questions)
    const [showResults, setShowResults] = useState(false)
    const countDeckQuestion = deck.questions.length 
    const changeQuestion =() => count === countDeckQuestion-1 ?setCount(0):setCount(count+1)
    
    const handleCorrectAnswer =() =>{
      changeQuestion()
      return setCorrectAnswer(count >= correctAnswer? correctAnswer+1: count)
    }
    const handleIncorrectAnswer =() =>{
        changeQuestion() 
        if(count >= incorrectAnswer){
            setIncorrectAnswer(incorrectAnswer+1)
        }
      }
    const reset=()=>{
        //setCount(0)
        setShowResults(false)
        setCorrectAnswer(0)
         setIncorrectAnswer(0)
    }
    useEffect(()=>{    
        
        if(correctAnswer + incorrectAnswer === countDeckQuestion){
            setShowResults(true)
            saveResult(deck.title, correctAnswer, incorrectAnswer).then(res=>{
                console.log(`${JSON.stringify(res)}`)
            }).catch(err=>console.log(err));
            
        }  
    },[count,incorrectAnswer, correctAnswer,showResults])
      
    if(showResults){
        
                
        return (
            <ResultPage 
                cp={correctAnswer * 100/ countDeckQuestion} 
                ip={incorrectAnswer * 100/ countDeckQuestion} 
                reset={reset}
                />
        )
        
    }

    return (<View style={styles.center}>            

            {(deck.questions && deck.questions.length) ? (
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