import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Update() {
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
    <div className="mx-auto mt-6 flex flex-col rounded-lg border border-[#e1e0e0] bg-[#e8e8e8] p-4  justify-center gap-5">
      <h1>Updatebook</h1>
      <input className='p-2 rounded-lg shadow-sm' type="text" placeholder="title" name="title" onChange={handleChange} />
      <input className='p-2 rounded-lg shadow-sm' type="text" placeholder="desc" name="desc" onChange={handleChange} />
      <input className='p-2 rounded-lg shadow-sm' type="number" placeholder="price" name="price" onChange={handleChange} />
      <input className='p-2 rounded-lg shadow-sm' type="text" placeholder="cover" name="cover" onChange={handleChange} />
      <button className="bg-white hover:bg-[#f1faf4] p-2 rounded-lg shadow-sm px-4" onClick={handleClick}>
      Update
      </button>
    </div>
  )
}
