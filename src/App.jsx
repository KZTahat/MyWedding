import { useState } from 'react'
import './App.css'
import MyWedding from './MyWedding';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyWedding />
    </>
  )
}

export default App
