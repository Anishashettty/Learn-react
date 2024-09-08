import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter]=useState(15)

const addValue=()=>{
  console.log("clicked",counter)
  
  setCounter(counter<20?counter+1:0)
}
const removeValue=()=>{
  setCounter(counter>0?counter-1:0)
}
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Couteer value : {counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
