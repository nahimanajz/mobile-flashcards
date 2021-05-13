import React,{useEffect, useState} from "react"
import { TextInput} from 'react-native';
import { styles } from "../utils/styles";


export function EditText({onChangeText}){
   

    return(
        <TextInput
            style={styles.input}            
            onChangeText={onChangeText}
        />
    )
}

