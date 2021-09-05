import React, { useEffect, useReducer } from 'react' 
import'./style.css'
import { todoReducer } from './todoReducer'; 
import { Todolist } from './Todolist'; 
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {

const init= () => { 

return JSON.parse(localStorage.getItem('todos')) || []; 

}

const [todos,dispatch] = useReducer(todoReducer, [],init) 


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

const handleAddTodo = (newTodo) => {
    dispatch({
        type: 'add',
        payload: newTodo
    }); 
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
                <TodoAdd
                handleAddTodo={handleAddTodo} 
                />


                </div>
                
                    </div>
                </>
    )
}
