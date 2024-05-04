import logo from './logo.svg';
import './App.css';
import {  useState} from "react";
import { Fliter } from './filter';
const arr=["hrutik","banana","tree","plant"]
function App() {
  const [data,setdata]=useState(arr)
  const [filter,setfilter]=useState("r")
  return (
    <div className="App">
    <Fliter items={data} filter={filter}/>
    </div>
  );
}

export default App;
