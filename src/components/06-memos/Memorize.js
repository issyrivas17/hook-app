import React,{useState} from 'react' 
import {useCounter} from '../hooks/useCounter' 
import {Small} from '../06-memos/Small'

import '../02-useEffect/effects.css' 

export const Memorize = () => {


  const {counter,increment}= useCounter(10);  
/*   console.log({increment}) */
const [Show, setShow] = useState(true)
    return (
        <>
            <h1>counter: <Small value={counter}/> </h1> 
            <button 
            className= 'btn btn-primary'
            onClick={increment}> 
            +1</button>
<button 
className= 'btn btn-outline-primary ml-3'
onClick={ () => {
setShow (!Show); 
}}
> 
    Show/Hide {JSON.stringify (Show) }
</button>



        </> 
    )
}
