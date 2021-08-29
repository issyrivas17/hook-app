 
 import {useState,useEffect,useRef} from 'react'

 export const useFetch = (url) => {
  
  const isMounted = useRef(true); 
const [state, setState] = useState({data: null,loanding:true,error: null})

useEffect( () => {
  return () => {
    isMounted.current = false; 
  }
}, [])

useEffect(() => {

setState({data: null, loanding: true , error:null}); 
  
fetch(url)
  .then (resp => resp.json()) 
  .then(data => {
    if(isMounted.current) {
      setState ({ 
          loanding: false,
          error:null,
          data
         });
     } 
},)  
},[url])
return state;
 }