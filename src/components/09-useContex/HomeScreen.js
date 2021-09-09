import React,{useContext} from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => { 

 const usercontext = useContext(UserContext) 
 
 console.log(usercontext); 


    return (
        <>
          <h1>HomeScreen</h1>  
          <hr/> 
        </>
    )
}
