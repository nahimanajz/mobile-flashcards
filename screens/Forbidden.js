import React from "react"
import {View, Text} from 'react-native'
import { styles } from "../utils/styles"

export function Forbidden(){
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Sorry You can not take a quiz because there is no cards</Text>
        </View>
    )
}