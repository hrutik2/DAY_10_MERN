
import { useEffect,useState } from "react";

export const useFetch=(url)=>{
 const [data,setdata]=useState([])
 const [error,seterror]=useState("")
 useEffect(()=>{
    const fectchdata=async()=>{
        try {
            const res= await fetch(url)
            if(!res.ok){
                throw new Error("Network response was not ok")
            }
            else{
              const respones= await res.json()
              setdata(respones)
            }
        } catch (error) {
            seterror(error)
            
        }
    }
    fectchdata()
    
 },[url])
 return {data,error}
}