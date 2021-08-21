import React,{useState} from 'react' 
import './Counter.css'

    export const CounterApp = () => {
        const [state,setState] = useState({
            Counter1:10, 
            Counter2:20,
            Counter3:30,
            Counter4:40,
        });  

        const {Counter1,Counter2} = state; 
        
        return (
            <> 
                <h1>Counter {Counter1}</h1>  
                <h1>Counter {Counter2}</h1>  
                <br/> 
            <button classname='btn btn-primary'
            onClick = { () => { 
                setState ({
                   ...state,
                    Counter1:Counter1 +1
                    }) 
            }}>+1</button> 
            </>
        )
    }
