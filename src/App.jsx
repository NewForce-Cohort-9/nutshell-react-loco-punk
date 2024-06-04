import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { NewArticle } from './components/articles/NewArticle.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/newarticle" element={<NewArticle currentUser={4} />} />
    </Routes>
        {/* <div className="Dashboard">
      <header className="App-header">
        <h1>Welcome to Nutshell</h1>
      </header>
    </div> */}
    </>
  )
}

export default App
