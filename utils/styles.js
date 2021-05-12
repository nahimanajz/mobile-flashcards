import { StyleSheet } from 'react-native';
import * as color from "./colors"

export const styles = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor:color.white,
       height: 'auto',
       alignItems: 'center',
       justifyContent: 'space-evenly'
       
    },
    glass: {
        backgroundColor: 'rgba(255,255,255,0.14)',
        marginTop: 23
    },
    button:{
        backgroundColor:color.pink,
        height: 40,
        width: 300,
        borderRadius: 8,
        marginTop: 20
        
    },
    input:{
        borderRadius: 8,
        borderWidth: 2,
        borderColor:color.pink,
        height: 40,
        width: 300,
        textAlign: 'left',
        marginTop: 20
    },
    btnText: {
        color: color.white,
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 20    
    },
    title: {
        fontSize:32,
        textAlign: 'center'
    },
    content: {
       padding: 23,
       paddingTop: 50
    }
})