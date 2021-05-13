import React from "react"
import {View, Text,ScrollView} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import {styles} from '../utils/styles'
import {Card} from 'react-native-shadow-cards';

export function Dashboard(){
    // TODO: When a user click on deck he must be redirected to deck detail
    return (
        <ScrollView style={styles.dashboard}>
            {/* This is a list of decks */}
            <Card style={[styles.dash]}>
                <Text style={[styles.title]}>Deck 1</Text>
                <TouchableOpacity >
                     <Text style={[styles.subtitle]}>0 cards</Text>

                </TouchableOpacity>
            </Card>
            
        </ScrollView>
    )
}