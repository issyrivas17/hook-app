import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => { 
 
const user = {
    id: 1234,
    nombre: 'Ismenia',
    email: 'Princessimenia@¶gmail.com' 
}


    return (
        <UserContext.Provider value= {user}>

         <AppRouter/> 

        </UserContext.Provider>
      
    )





}