import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-700">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Book/>} /></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
