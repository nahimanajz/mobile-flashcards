import React,{useEffect, useState} from "react"
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { styles } from "../utils/styles";
import{FontAwesome } from '@expo/vector-icons'
import { EditText } from "../components/EditText";


export function AddDeck(){
    const [value, setValue] = useState();
    const submitInfo =() => {
        alert(value)
    }

    return (
        <View style={styles.container}>
            <View>
               <Image source={require('../images/list.jpg')} style={{height:200, width:200}}></Image>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>What is the title of your New Deck ?</Text>
                <EditText onChangeText={value=> setValue(value) }/>
            </View>
            <View>
            <TouchableOpacity style={styles.button} onPress={submitInfo}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}