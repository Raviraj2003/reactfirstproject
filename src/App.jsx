import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter=5
  let [counter, setCounter] = useState(5)

  const addvalue = ( )=>{
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter+1)
    if (counter>=20){
      setCounter(20)
    }
  

  }
  const removeValue =() =>{
    setCounter(counter-1)
    if(counter<=0){
      setCounter(0)
    }

  }
  return (
    <>
      <h1>chai our react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
