import React,{useEffect, useState} from "react"
import {View, Text, Image} from 'react-native'
import { styles } from "../utils/styles"
import{FontAwesome } from '@expo/vector-icons'
import { EditText } from "../components/EditText"
import { SubmitButton } from "../components/SubmitButton"
import { useNavigation } from '@react-navigation/native'
import * as color from '../utils/colors'
import { getDeck, saveDeck } from '../utils/data'

export function AddDeck({navigation}){
    const [deck, setDeck] = useState({title:''});
    
    const submitInfo =() => { 
        // Redirect To DECK CREATED WITH created deck  
  
        saveDeck(deck.title).then(()=>{            
            navigation.navigate("stacks",{screen: 'detail', params:{deck}})
        }).catch(err =>console.log(err))
    
    }
    //TODO: User clicks on add button should be taken to that deck detail
    return (
        <View style={styles.container}>
            <View>
               <Image source={require('../images/list.jpg')} style={{height:200, width:200}}></Image>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>What is the title of your New Deck ?</Text>
                <EditText onChangeText={title=> setDeck({...deck, title}) } type='default'/>
            </View>
            <View>
                <SubmitButton onPress={submitInfo} 
                    label={'Create Deck'} 
                    color={`${color.pink}`}
                    disabled={!Boolean(deck.title)}
                 />
            </View>
        </View>
    )
}