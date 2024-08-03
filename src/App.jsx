import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Header} from './Components/Header/Header'
import { Home } from './Components/HomePage/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Home/>      
    </>
  )
}

export default App
