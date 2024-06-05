import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, } from 'react-router-dom'
import { EventList } from './components/Events/Events.jsx'
import { TaskList } from './components/Tasks/Tasks.jsx'
import { Route, Routes } from 'react-router-dom'
import { ApplicationViews } from './views/ApplicationViews.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 

      <Route path="*" element={
        <ApplicationViews />
      } />
    </Routes>

  )
}

export default App
