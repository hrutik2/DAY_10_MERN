import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Addcontect } from './component/addcontect';
const contact=[{
  name:"jone",
  id:1,
  email:"hkjadhav@gmail.com"
},
{
  name:"jone2",
  id:2,
  email:"kjadhav@gmail.com"
}
]

function App() {
 const [data,setdata]=useState(contact)
 const handleadd=(obj)=>{
  let ID=(data.length+1)
  let Obj={...obj,id:ID}
   setdata([...data,Obj])
 }
  return (
    <div className="App">
       <Addcontect Add={handleadd} />
       <table>
        <ul>
          {data.map(el=>
          <li key={el.id}>
            <b>{el.name}</b> : {el.email}
          </li>
          )}
        </ul>
       </table>
    </div>
  );
}

export default App;
