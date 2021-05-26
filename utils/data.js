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
 * @return {Object} decks 
 */
export const getDecks= async() => {
try {
    const allDecks = await AsyncStorage.getItem(STORAGE_KEY)  
    return JSON.parse(allDecks) 
} catch (error) {
    console.log(error)
}
}

/**

 * @Description { get all decks} 
 * @param { String } id of the deck hast to be the title
 * @return { Object } chosen deck
 */
export const getDeck= async (id)=>{

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
 return await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck))
} catch (error) {
    console.log(`From add card APi: ${error}`)
}
 }

  /**
  * @param { String } title of deck w're going delete
  * @description retreive all decks, delete chosen deck based on title, then save remaining decks
  * @return promise with a query which deletes a question
  */
 export const deleteDeck = async (title)=>{
  try {
      const dks = await getDecks()
      delete dks[title]
      return await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dks))
      
  } catch (error) {
    return console.log("From delete database", error);
  }
  
 }
 /**
  * @param { String, Float, Float } title of deck w're going to save it's result'
  * @description deck, date, and correct percentage and incorrect percentages
  * @return { Boolean } We will check it true to show notification
  */
 export const saveResult = async (deck, cp,ip) => {
   try {
      const result = {
        [deck]:{
          timestamp: new Date().toLocaleDateString(),     
          cp,
          ip,
        }
      }
      return await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(result))
   } catch (error) {
     console.log(error)
   }
 }
 /**
  * @param {*} get all decks and check if there is loggedData
  */
 export const checkSolvedQuestions = async () =>{
   const decks = await getDecks();   
   const loggedData = Object.values(decks).some(deck=> deck.timestamp && deck.timestamp === new Date().toLocaleDateString())
 
   return {notify:loggedData?false:true}
 }
