import React from 'react'
import '../02-useEffect/effects.css'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
export const MultipleCustomHooks = () => {

const {counter,increment}=useCounter(1)


const{loanding,data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)


const {author,quote} = !! data && data[0];  




    return (
        <div>
            <h1>BreakingBad Quotes</h1> 
           <hr/> 
{
    loanding 
    ? 
    (
          <div className='alert alert-info text-center'> 
          Loanding...
        </div> 
    ) : 
    (
        <blockquote className = 'blockquote text-right'>
        <p className ='mb-0'>{quote} </p>  
        <footer className='blockquote-footer'> {author}.</footer>
        </blockquote> 

    )
} 

<button 
className ='btn btn-primary'
onClick = {increment}
>
    Siguiente frase. 
</button>

        </div>
    )
}
