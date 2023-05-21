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
    <div className="mx-auto items-center justify-center text-slate-600">
      <h1>Food meals list</h1>
      <button className="mt-5 rounded-lg bg-[#e2e1e1] p-3 px-6 hover:bg-[#d5d5d5]">
        <Link to="/add">Add new book</Link>
      </button>

      <div className="mx-auto mt-6 grid grid-cols-4 items-center justify-center gap-4">
        <button className="rounded-lg min-h-full bg-[#eae8e8] p-4 hover:bg-[#d5d5d5]">
          <Link to="/add">Add a new book</Link>
        </button>
        {books.map((book) => (
          <div className="flex flex-col rounded-lg bg-[#eae8e8] p-4" key={book.id}>
            {book.cover && <img src={book.cover} alt={book.title} className="h-[250px] w-[200px] bg-emerald-400 object-cover" />}
            <h1 className="mt-2 text-lg">{book.title}</h1>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
