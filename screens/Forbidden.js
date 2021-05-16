import React, { useEffect, useState } from "react"
import {View, Text} from 'react-native'
import { SubmitButton } from "../components/SubmitButton"
import { styles } from "../utils/styles"
import * as color from '../utils/colors'

export function Forbidden({route}){
    let [count, setCount] = useState(0)
    const [deck] = useState(route.params.questions)
    const countDeckQuestion = deck.questions.length 

    // useEffect(()=> countDeckQuestion>=count&&count, [count])
    return (
        <View style={styles.content}>
            <View>
                <Text>{count}/ {countDeckQuestion}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                        {!deck?
                                `Sorry You can not take a quiz because there is no cards`
                        :
                         count <= countDeckQuestion-1 && deck.questions[count].question
                        }
                    </Text>
                    <Text style={[styles.subtitle,{color:'tomato', paddingTop:18}]}>Answer</Text>
                    <SubmitButton onPress={()=>setCount(count+1)} label="Correct" color={`${color.textBlack}`}/>
                    <SubmitButton onPress={()=>setCount(count+1)} label="Incorrect" color={`tomato`}/>
            </View>
                
        </View>
    )
}