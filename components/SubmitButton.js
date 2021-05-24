import React from "react"
import { Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { styles } from "../utils/styles"
import PropTypes from "prop-types"

export function SubmitButton({onPress, label, color, disabled}){
    return(
        <TouchableOpacity style={[styles.button, {backgroundColor:color}]} onPress={onPress} disabled={disabled}>
            <Text style={styles.btnText}>{label}</Text>
        </TouchableOpacity>
    )
}

SubmitButton.propTypes = {
    onPress: PropTypes.func.isRequired, 
    label: PropTypes.string.isRequired
}