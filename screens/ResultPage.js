import React from "react"
import {View, Text} from 'react-native'
import { SubmitButton } from "../components/SubmitButton"
import { styles } from "../utils/styles"
import * as color from '../utils/colors'
import { useNavigation } from '@react-navigation/native'

/**
 * 
 * @param {Number, Number} correct percentage and incorrect answer percentages 
 */
export default function ResultPage({ip, cp, reset}){
   const navigation = useNavigation()

    return <View style={[styles.center, {backgroundColor: color.pink}]}>
                <View style={[styles.glass, {padding: 64}]}>
                        <Text style={styles.title}>Correct {cp}%</Text>
                        <Text style={styles.title}>Incorrect {ip}%</Text>
                </View>
                <SubmitButton onPress={()=>navigation.navigate("stacks", {screen: 'detail'})} label={'Go Back '} color='orange'/>
                <SubmitButton onPress={reset} 
                    label={'Restart A Quiz'} 
                    color={color.textBlack}/>
            </View>
    }
    