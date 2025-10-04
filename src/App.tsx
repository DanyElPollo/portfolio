import { useState } from 'react'
import './App.css'
import BtnBase from './components/btn/BtnBase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hola Mundo</p>
      <BtnBase label='Click-me' onClick={() => setCount(count + 1)} />
      <span>{count}</span>
    </>
  )
}


export default App
