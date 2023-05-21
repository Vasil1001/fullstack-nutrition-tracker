import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import Add from './pages/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-700">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
