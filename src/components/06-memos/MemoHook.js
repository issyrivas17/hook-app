import React,{useState,useMemo} from 'react' 
import {useCounter} from '../hooks/useCounter' 
import {procesoPesado} from '../helpers'

import '../02-useEffect/effects.css' 

        export const MemoHook = () => {


        const {counter,increment}= useCounter(5000);  
        /*   console.log({increment}) */
        const [Show, setShow] = useState(true) 

        const memoProcesoPesado=useMemo(() => procesoPesado(counter), [counter])
            return (
                <>
                <h1>MemoHook</h1>
                    <h3>counter: <small>{counter}</small></h3> 
                    <hr/> 

                    <p>{memoProcesoPesado}</p> 
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
