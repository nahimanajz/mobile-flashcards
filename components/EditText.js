import React from "react"
import { TextInput} from 'react-native'
import { styles } from "../utils/styles"
import PropTypes from "prop-types"


export function EditText({onChangeText, placeholder}){
    return(
        <TextInput
            style={styles.input}            
            onChangeText={onChangeText}
            keyboardType='numeric'
            placeholder={placeholder}
        />
    )
}
EditText.propTypes = {
    onChangeText: PropTypes.func.isRequired 
}
