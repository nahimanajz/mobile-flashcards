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
export default function ResultPage({route}){
   const navigation = useNavigation()
   
   const {correctPercentage, incorrectPercentage, deck} = route.params
    console.log(route.params)
    return <View style={[styles.center, {backgroundColor: color.pink}]}>
                <View style={[styles.glass, {padding: 64}]}>
                    <Text style={styles.title}>Correct {correctPercentage}%</Text>
                    <Text style={styles.title}>Incorrect {incorrectPercentage}%</Text>
                </View>
                <SubmitButton onPress={()=>navigation.navigate("stacks", {screen: 'detail'})} label={'Go Back '} color='orange'/>
                <SubmitButton onPress={()=>navigation.navigate("stacks", {screen: 'Quiz', params:{reset:true, deck}})} 
                    label={'Restart A Quiz'} 
                    color={color.textBlack}/>
            </View>
    }
    