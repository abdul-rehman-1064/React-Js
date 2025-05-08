// import { useState } from 'react'
// import './App.css'

// function App() {
//   // Basic hooks concept
//   //Hooks 1-counter represent start value and 2- set counter represent updating value
//   let [counter,setcounter] = useState(0)
//   // let counter = 0;

//   const addValue =()=>{
//     if(counter == 20){
//       setcounter(counter);
//     }
//     else{
//       setcounter(counter+1)

//       //Interview question
//       // setcounter(counter+1) 
//       // setcounter(counter+1)
//       // setcounter(counter+1)
//      they return only one increment bcz they overwrite them according to fiber algorithum they send data in the form           of batches all these 3 commands became batch and send msg to dom to update the ui only once
//      set counter is a function and they also have a call backfunction in it almost all state have callback function 
//     like setcounter(()=>{})

//       // setcounter(preCounter => preCounter+1)
//       // setcounter(preCounter => preCounter+1)  These functions increment the value by three bcz they treat as a call back function one function complete then second will execute we can fetch value from  last updating state
//       // setcounter(preCounter => preCounter+1)
//     }
//   }


//   const removeVal =()=>{
//     if(counter == 0)
//     setcounter(counter)
//   else{
//     setcounter(counter-1)
//   }
//   }

//   return (
//     <>
//       <h1>My First React App</h1>
//       <h2>Counter Project</h2>
//       <h3>Counter : {counter} </h3>

//       <button onClick={addValue}
//       >Add +
//         { /* function to update value */ }
//       </button>
//       <button onClick={removeVal}
//       >Remove -</button>
//       <p>Updated Value : {counter} </p>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'
import './App.css'

const App = () => {
let [counter,setCounter] = useState(1)
const addVal = ()=>{
  if(counter == 20){
    setCounter(counter)
  }
  else{

    setCounter(counter+1)
  }
}

const delVal =()=>{
  if(counter == 0){
    setCounter(counter)
  }
  else{

    setCounter(counter-1)
  }
}
  return (
    <>
    <h1>Counter Project</h1>
    <h4>Counter : {counter}</h4>
    <button onClick={addVal}>Add Value</button>
    <button onClick={delVal}>Decrease Value</button>
    <footer>{counter}</footer>
    </>
  )
}

export default App
