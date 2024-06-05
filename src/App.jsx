import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './Components/Chat/Nav/NavBar'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <NavBar />
        <div className="Dashboard">
      <header className="App-header">
        <h1>Welcome to Nutshell</h1>
      </header>
    </div>
    </>
  )
}

export default App
