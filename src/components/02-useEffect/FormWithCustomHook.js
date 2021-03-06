import React,{useEffect} from 'react' 
import './effects.css' 
import { useForm} from '../hooks/useForm';


export const FormWithCustomHook = () => {
  
    const [formValues,handleInputChange] = useForm({
        name : '',
        email : '',
        password : '' 
    })

const {name ,email,password}= formValues; 

useEffect( () => {
console.log('Cambio el email')
},[email])

const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log(formValues); 
}
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1> 
            <hr/> 
           <div className= 'form-group'>
               <input 
               type = 'text'  
               name = 'name'
               className= 'Form-control' 
               placeholder ='Tu nombre' 
               autoComplete = 'off' 
               value = {name} 
               onChange = {handleInputChange}
               />
               </div> 
               <div className= 'form-group'>
               <input 
               type = 'text'  
               name = 'email'
               className= 'Form-control' 
               placeholder ='email@gmail.com' 
               autoComplete = 'off' 
               value = {email} 
               onChange = {handleInputChange}
               />
               </div>  
               <div className= 'form-group'>
               <input 
               type = 'password'  
               name = 'password'
               className= 'Form-control' 
               placeholder ='****' 
               autoComplete = 'off' 
               value = {password} 
               onChange = {handleInputChange}
               />
               </div> 

            <button type= 'submit' className ='btn btn-primary'>Guardar</button> 
        </form> 
    )
}
