import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from './config';

export let decks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
}

/**
 * @Description  get all from local storage 
 * @return {Object} 
 */
export const getDecks= async() => {
try {
    const allDecks = await AsyncStorage.getItem(STORAGE_KEY)  
  //console.log(JSON.stringify(allDecks))
  // return allDecks
    return JSON.parse(allDecks) //JSON.parse(allDecks);
} catch (error) {
    console.log(error)
}
}

/**

 * @Description { get all decks} 
 * @param { String } id of the deck 
 * @return { Object } chosen deck
 */
export const getDeck= async (id)=>{
   // ({deck: decks[id]})
   try {
         const data = await AsyncStorage.getItem(STORAGE_KEY)
         return data[id]
   } catch (error) {
       console.log(error)
   }
} 
/**
 * @Description  add this new title to the list of the decks
 * @param { title } add a title to other decks
 */

 export const saveDeck= async (title)=>{
     const newDeck = {
         [title]:{
             title:title,
             questions:[]
         }
     }
   
     const addDeck = Object.assign(decks, newDeck)

     try {
       return await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(addDeck))
     } catch (error) {
         console.log(error)
     }

 }
 /**
 * @param { String, Object} question and answer of chosen deck
 * @return {Object} append question and it's answer to the chosen deck title
 */
 export const addCardToDecks = async (title, card)=>{
 const { question, answer} = card;
 const deck = await getDecks().then((dks)=>(
    {
      ...dks,
      [title]:{
        questions: dks[title].questions.concat({question, answer})
      }
    }
  )
  )
 try {
 const save = await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck))
} catch (error) {
    console.log(`From add card APi: ${error}`)
}
 
 }