import {useState,useEffect,useRef} from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true); 

    const [state, setState] = useState({data: null,loanding:true,error: null})

    useEffect =( () => {
      return () => {
        isMounted.current = false; 
      }

    },[])



  useEffect(() => {
    setState({data: null, loanding: true , error:null})
fetch (url)
.then (resp => resp.json()) 
.then(data => {

setTimeout(() => { 
   if(isMounted.curr){
     setState ({ 
         loanding: false,
         error:null,
         data
     })

   }

}, 4000);



})
  },[url]) 

  return state; 
}
