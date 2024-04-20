
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>

        <h1
          className='text-3xl font-bold bg-white p-4'
        >Background Changer
        </h1>

        <br />

        <div
          className='bg-gray-500 flex gap-1 p-3 rounded-full justify-evenly'>
          <button
            onClick={() => {
              setColor("red");
            }}
            className='bg-red-500 p-2 rounded-full'
          >Red</button>

          <button
            className='bg-green-500 p-2 rounded-full'
            onClick={() => {
              setColor("green")
            }}
          >Green</button>

          <button
          onClick={() => {
            setColor("yellow")
          }}
          className='bg-yellow-500 p-2 rounded-full'
          >Yellow</button>

          <button
          onClick={() => {
            setColor("blue")
          }}
          className='bg-blue-500 p-2 rounded-full'
          >Blue</button>

          <button
          onClick={() => {
            setColor("white")
          }}
          className='bg-white p-2 rounded-full'
          >White</button>

          <button
          onClick={() => {
            setColor("black")
          }}
          className='bg-black text-white p-2 rounded-full'
          >Black</button>

          <button
          onClick={() => {
            setColor("pink")
          }}
          className='bg-pink-500 p-2 rounded-full'
          >Pink</button>

          <button
          onClick={() => {
            setColor("purple")
          }}
          className='bg-purple-500 p-2 rounded-full'
          >Purple</button>

          <button
          onClick={() => {
            setColor("olive")
          }}
          className='bg-olive-300 p-2 rounded-full'
          >Olive</button>
        </div>
      </div>
    </>
  )
}

export default App
