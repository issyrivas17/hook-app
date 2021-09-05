import React, { useEffect, useReducer } from 'react' 
import'./style.css'
import { todoReducer } from './todoReducer'; 
import {useForm} from '../hooks/useForm' 
import { Todolist } from './Todolist'; 

export const TodoApp = () => {

const init= () => { 

return JSON.parse(localStorage.getItem('todos')) || []; 

}

const [todos,dispatch] = useReducer(todoReducer, [],init) 

 const [{description},handleInputChange,reset]= useForm ({
     description: ''
 })

useEffect (() => {
localStorage.setItem('todos',JSON.stringify(todos)) 
},[todos])

const handleDelete = (todoId) => {

const action = {
    type: 'delete',
    payload: todoId
}
dispatch (action); 
} 
const handleToggle = (todoId) => {
  
    const action = {
        type: 'toggle', 
        payload:todoId
    }
 dispatch (action); 
}

 const handleSubmit = (e) => {
e.preventDefault(); 

if (description.trim().length <= 1){
    return; 
} 

const newTodo={
    id: new Date().getTime(),
    desc: description,
    done: false 
}; 

const action={
    type: 'add',
    payload: newTodo
}

dispatch (action); 
reset (); 
 } 


    return (
                <>
                    <h1>TodoApp ({todos.length})</h1> 
                    <hr/> 

                    <div className ='row'> 
                    <div className = 'col-7'> 
                    {/*TodoList,Todos,handleDelete,handToggle*/}
                   <Todolist
                   todos= {todos} 
                   handleDelete= {handleDelete} 
                   handleToggle= {handleToggle}
                   
                   /> 
                    </div>

                <div className = 'col-5'>
                <h4> Agregar TODO</h4> 
                <hr/> 
                <form onSubmit= {handleSubmit}>
                    <input
                    className = 'form-control'
                    type= 'text'
                    name= 'description' 
                    placeholder = 'Aprender...'
                    autoComplete ='off' 
                    value={description}
                    onChange = {handleInputChange}
                    /> 
                    <button 
                    type='submit'
                    className= 'btn btn-outline-primary mt-1 btn-block'> 
                    Agregar
                    </button>
                </form>


                </div>
                
                    </div>
                </>
    )
}
