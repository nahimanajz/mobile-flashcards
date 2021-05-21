
 import * as  Notifications from 'expo-notifications'
/**
 * TODO: set Notification handler for
 * Schedule notification after 3 hours
 * 
 *  */ 
/*
 export  function notification(){
    Notifications.setNotificationHandler({
        handleNotification: async ()=>({
           shouldPlaySound: true,
           shouldShowAlert: true,
           shouldSetBadge: true
        })
    })


   const notify =  Notifications.scheduleNotificationAsync({
        content: {
            title:'Hi Remember to set  new Deck and it\'s cards',
            body: 'As you want to play, You really have to set card on you chosen deck'
        },
        ios: {sounds:true},
        android: {sounds:true, priority:'high', vibrate:true},    
        trigger:null
       
    })
    Notifications.cancelAllScheduledNotificationsAsync(notify)
    nextTrigger()
 }
 
 function nextTrigger (){
  return Notifications.getNextTriggerDateAsync({hour: 3, minute:1})
 }
 */