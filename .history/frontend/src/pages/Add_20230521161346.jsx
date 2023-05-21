import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: 'null',
    cover: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()

    try {
        await axios.post('http://localhost:8080/books', book)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
  }

  console.log(book)

  return (
    <div className="justify-center items-center mx-auto flex flex-col gap-5 mt-6 justify-center">
      <h1>Add a new book</h1>
      <input type="text" palceholder="title" name="title" onChange={handleChange} />
      <input type="text" placeholder="desc" name="desc" onChange={handleChange} />
      <input type="number" placeholder="price" name="price" onChange={handleChange} />
      <input type="text" placeholder="cover" name="cover" onChange={handleChange} />
      <button className='p-3 px-4 bg-slate-500 mt-5'
 onClick={handleClick}>Add</button>
    </div>
  )
}
