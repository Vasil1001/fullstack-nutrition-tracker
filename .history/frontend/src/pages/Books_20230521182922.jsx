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
    <div className="flex flex-col items-left justify-center text-slate-600">
      <h1>Food meals list</h1>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        {books.map((book) => (
          <div className="flex flex-col  bg-slate-500  p-4" key={book.id}>
            {book.cover && <img src={book.cover} alt={book.title} className="h-[250px] w-[200px] bg-emerald-400 object-cover" />}

            <h1 className="text-lg mt-2">{book.title}</h1>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button className="mt-5 bg-slate-500 p-3 px-4">
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  )
}
