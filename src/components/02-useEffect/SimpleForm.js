import React,{useEffect,useState} from 'react' 
import './effects.css' 

export const SimpleForm = () => {
  
    const [formState,setFormState] = useState({
        name : '',
        email : '' 
    })

const {name ,email}= formState; 



  useEffect ( () => {
   console.log('HEY!!!') 
  },[] ) 

  useEffect ( () => {
    console.log('formState Cambio') 
   },[formState] )

   useEffect ( () => {
    console.log('email cambio') 
   },[email] )



  const handleInputChange = ({target}) => {
      setFormState ({
          ...formState,
          [target.name]:target.value
      }) 
      
  }

    return (
        <>
            <h1>useEffect</h1> 
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
        </>
    )
}