import React,{useState} from "react"
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { styles } from "../utils/styles";
import{FontAwesome } from '@expo/vector-icons'


export function AddDeck(){
    const {text, setText} = useState(null);
    return (
        <View style={styles.container}>
            <View>
               <Image source={require('../images/list.jpg')} style={{height:200, width:200}}></Image>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>What is the title of your New Deck ?</Text>
                <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}