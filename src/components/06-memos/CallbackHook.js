import React,{useState,useCallback} from 'react' 
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => { 

const [counter, setCounter] = useState(10) 

/* const increment= () => {
    setCounter(counter + 1);
} */

const increment =useCallback( (num) => {
        setCounter(c => c + num); 
    },[setCounter]) 


    return (
        <>
            <h1>CallbackHook : {counter} </h1> 

            <ShowIncrement increment={increment}/> 
        </>

        
    )
}
