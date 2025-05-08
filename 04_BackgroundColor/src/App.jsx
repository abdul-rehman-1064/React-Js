import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  //use-case of hooks

  return (
    <div  className=' w-full h-screen -m-8 '
    style= {{backgroundColor :color}}>
    <div>
     <h1 className='text-white text-2xl font-bold' >Background Color Changer</h1>
     </div>

     <div className='bg-white fixed bottom-10 w-1/2 left-80 rounded-xl h-10 justify-center'>
      <button onClick={()=>setColor("red")} className='bg-red-900 p-1 rounded-md my-1 mx-2 text-white'>RED</button>
      <button onClick={()=>setColor("green")} className='bg-green-900 p-1 rounded-md my-1 mx-2 text-white'>GREEN</button>
      <button onClick={()=>setColor("olive")} className='bg-yellow-900 p-1 rounded-md my-1 mx-2 text-white'>OLIVE</button>
      <button onClick={()=>setColor("purple")} className='bg-purple-900 p-1 rounded-md my-1 mx-2 text-white'>PURPLE</button>
      <button onClick={()=>setColor("orange")} className='bg-orange-900 p-1 rounded-md my-1 mx-2 text-white'>ORANGE</button>
      <button onClick={()=>setColor("white")} className='bg-white p-1 rounded-md my-1 mx-2 text-black border-2'>WHITE</button>
      <button onClick={()=>setColor("lime")} className='bg-lime-600 p-1 rounded-md my-1 mx-2 text-white'>LIME</button>
      <button onClick={()=>setColor("teal")} className='bg-teal-700 p-1 rounded-md my-1 mx-2 text-white'>TEAL</button>
      <button onClick={()=>setColor("pink")} className='bg-pink-900 p-1 rounded-md my-1 mx-2 text-white'>PINK</button>
      <button onClick={()=>setColor("cyan")} className='bg-cyan-950 p-1 rounded-md my-1 mx-2 text-white'>CYAN</button>
     </div>
     </div>
  )
}

export default App


// onclick required a function . we run a callback function in a setcolor function which is a useState function
