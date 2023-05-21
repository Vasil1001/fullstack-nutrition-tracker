import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import Add from './pages/Add'
import Update from './pages/Update'

function App() {
  return (
    <div className="bg-[#f0f1f2]">
      <div className="max-w-screen mx-auto flex min-h-screen flex-col justify-center  px-10 xl:w-10/12  ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
