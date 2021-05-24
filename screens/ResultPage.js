import React, { useEffect, useState } from "react"
import {View, Text} from 'react-native'
import { SubmitButton } from "../components/SubmitButton"
import { styles } from "../utils/styles"
import * as color from '../utils/colors'
/**
 * 
 * @param {Number, Number} correct percentage and incorrect answer percentages 
 */
export default function ResultPage({ip, cp}){
//TODO: display redirection route, RestartQuiz, Back to Deck which goes to deck view
        return <View style={[styles.center, {backgroundColor: color.pink}]}>
                    <View style={[styles.glass, {padding: 64}]}>
                        <Text style={styles.title}>Correct {cp}%</Text>
                        <Text style={styles.title}>Incorrect {ip}%</Text>
                    </View>
                </View>
    }
    