import React, { useReducer } from 'react' 
import'./style.css'
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(), 
        desc: 'Aprender React',
        done: false 
    }]; 

const [todos] = useReducer(todoReducer, initialState) 

console.log(todos)

    return (
        <>
            <h1>TodoApp</h1> 
            <hr/> 

            <ul>
                <li>Hola</li>
                <li>Mundo</li> 
                <li>Nuevo!!</li>
            </ul>
        </>
    )
}
