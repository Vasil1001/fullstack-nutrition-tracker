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

  const handleClick = async (e) => {
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
    <div className="mx-auto mt-6 flex flex-col rounded-lg border border-[#e1e0e0] bg-[#e8e8e8] p-4 items-center justify-center gap-5">
      <h1>Add a new book</h1>
      <input className='' type="text" palceholder="title" name="title" onChange={handleChange} />
      <input className='' type="text" placeholder="desc" name="desc" onChange={handleChange} />
      <input className='' type="number" placeholder="price" name="price" onChange={handleChange} />
      <input className='' type="text" placeholder="cover" name="cover" onChange={handleChange} />
      <button className="bg-slate-500 p-3 px-4" onClick={handleClick}>
        Add
      </button>
    </div>
  )
}
