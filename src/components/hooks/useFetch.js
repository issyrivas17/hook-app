import {useState,useEffect} from 'react'

export const useFetch = (url) => {
    

    const [state, setState] = useState({data: null,loanding:true,error: null})

  useEffect(() => {
fetch (url)
.then (resp => resp.json()) 
.then(data => {

    setState ({
        loanding: false,
        error:null,
        data
    })
})
  },[url]) 

  return state; 
}
