import {useState  } from "react";
export const Addcontect=({Add})=>{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const add=(e)=>{
        e.preventDefault()
        let obj={
            name,
            email
        }
        Add(obj)
    }
    return(
        <div>
            <h3>Add Contect</h3>
            <input placeholder="name" value={name} onChange={(e)=>setname(e.target.value)}></input>
            <br/>
            <input placeholder="email"  value={email} onChange={(e)=>setemail(e.target.value)}></input>
            <br/>
            <button onClick={add}>submit</button>
        </div>
    )
}