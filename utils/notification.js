
 import * as  Notifications from 'expo-notifications'
/**
 * TODO: set Notification handler for
 * Schedule notification after 3 hours
 * 
 *  */ 

 export async function scheduleAndCancel(){
    await Notifications.setNotificationHandler({
        handleNotification: async ()=>({
           shouldPlaySound: false,
           shouldShowAlert: true,
           shouldSetBadge: false
        }),
    });

   let date = new Date()
   date.setDate(date.getDate() + 1)
   date.setHours(1)
   await Notifications.cancelAllScheduledNotificationsAsync()

    await Notifications.scheduleNotificationAsync({
        content: {
            title:'Hi Remember to set  new Deck and it\'s cards',
            body: 'As you want to play, You really have to set card on you chosen deck',
            data: {data: 'notified'}
        },
        
        ios: { sounds:true },
        android: {sounds:true, priority:'high', vibrate:true},    
        trigger: {
            time:date ,
            repeat: 'day'
        }
       
    })
 }

