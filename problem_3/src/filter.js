import { useMemo,useState ,useEffect } from "react";

export const Fliter=({items,filter})=>{
  const [data,setdata]=useState([])
  const [Data,setData]=useState([])
  const Filterdata=useMemo(()=>{
    //console.log(items)
      const fdata=items.filter(el=>{
        if(el.toLowerCase().includes(filter.toLowerCase())){
            return el
        }
         
      })
      
        //console.log(fdata)
       return fdata
  },[items,filter])
  
 useMemo(()=>{
   
    setdata(Filterdata)
 },[Filterdata])
  return(
    <div>
        <h1>Data</h1>
        <ul>
            {data.map(el=>(
                <li>{el}</li>
            ))}
        </ul>
    </div>
  )
}