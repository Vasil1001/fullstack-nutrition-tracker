import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Books() {
  const [books, setBooks] = React.useState([])

  //   const fetchBooks = async () => {
  //     const response = await fetch('http://localhost:8080/books')
  //     const data = await response.json()
  //     setBooks(data)
  //     console.log(data)
  //   }

  useEffect(() => {
    async function fetchAllBooks() {
      try {
        const response = await axios.get('http://localhost:8080/books')
        setBooks(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllBooks()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <h1>Food meals list</h1>
      <div className="flex gap-5 mt-6 justify-center">
        {books.map((book) => (
          <div className="p-6 bg-slate-400" key={book.id}>
            <h1 className='text-3lg'>{book.title}</h1>
            {book.cover && <img src={book.cover} alt={book.title} />}
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button className='p-3 px-4 bg-slate-500 mt-5'>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  )
}
