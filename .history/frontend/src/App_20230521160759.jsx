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
    <div className="max-w-screen mx-auto flex  min-h-screen flex-col  justify-center  text-center sm:p-7 xl:mx-auto xl:w-10/12 xl:p-0 xl:pt-5 ">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
