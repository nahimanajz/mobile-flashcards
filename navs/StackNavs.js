
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import * as color from '../utils/colors'
import { DeckDetail } from '../screens/DeckDetail'
import { AddDeck } from '../screens/AddDeck'
import { AddCard } from '../screens/AddCard'
import { QuizPage } from '../screens/QuizPage';

const Stack = createStackNavigator();
//Todo: these are nested routes regarding to how screen follows each other,
export const StackNavs =() =>{
    
return(
 
    <Stack.Navigator  
        screenOptions={{           
            headerTintColor: color.textBlack,
            headerStyle: { backgroundColor: color.pink },
        }}>
        <Stack.Screen 
           name="ADD DECK" 
           component={AddDeck} />
           <Stack.Screen 
           name="AddCard" 
           component={AddCard} />
           <Stack.Screen 
           name="Quiz" 
           component={QuizPage} />
        <Stack.Screen 
           name="detail" 
           component={DeckDetail} />
    </Stack.Navigator>

)

    
}