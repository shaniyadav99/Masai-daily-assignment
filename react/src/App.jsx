import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Component/counter'
import { Focus } from './Component/Focus'
import { Fileupload } from './Component/Fileupload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Timer/> */}
    {/* <Counter/> */}
    {/* <Focus/> */}
    <Fileupload/>
    </>
  )
}

export default App
