import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Update() {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: 'null',
    cover: '',
  })

  const [selectedBook, setSelectedBook] = useState([])

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split('/')[2]

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`http://localhost:8080/books/${bookId}`, book)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`http://localhost:8080/books/${bookId}`)
        setSelectedBook(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBook()
  }, [])

  console.log(book)

  return (
    <div className="mx-auto mt-6 flex flex-col justify-center gap-5 rounded-lg border border-[#e1e0e0]  bg-[#e8e8e8] p-4">
      <h1>Revise book</h1>
      <input className="rounded-lg p-2 shadow-sm" type="text" placeholder={selectedBook.title} name="title" onChange={handleChange} />
      <input className="rounded-lg p-2 shadow-sm" type="text" placeholder={selectedBook.desc} name="desc" onChange={handleChange} />
      <input className="rounded-lg p-2 shadow-sm" type="number" placeholder={selectedBook.price} name="price" onChange={handleChange} />
      <input className="rounded-lg p-2 shadow-sm" type="text" placeholder={selectedBook.cover} name="cover" onChange={handleChange} />
      <button className="rounded-lg bg-white p-2 px-4 shadow-sm hover:bg-[#f1faf4]" onClick={handleClick}>
        Update
      </button>
    </div>
  )
}
