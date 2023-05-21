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
    <div className="mx-auto items-center justify-center text-slate-700">
      <h1>Food meals list</h1>
      <div className="mx-auto grid grid-cols-4 gap-4">
        <button className="col-span-1 mt-5 rounded-lg bg-[#eae8e8] p-3  hover:bg-[#d5d5d5]">
          <Link to="/add">Add new book</Link>
        </button>
      </div>

      <div className="mx-auto mt-5 grid grid-cols-4 items-center justify-center gap-4">
        <button className="min-h-full rounded-lg bg-[#eae8e8] p-4 hover:bg-[#d5d5d5]">
          <Link to="/add">Add a new book</Link>
        </button>
        {books.map((book) => (
          <div className="flex flex-col rounded-lg bg-[#e8e8e8] p-4" key={book.id}>
            {book.cover && <img src={book.cover} alt={book.title} className="h-[250px] w-[200px] bg-emerald-400 object-cover" />}
            <h1 className="mt-2 text-lg">{book.title}</h1>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <div className="flex flex-col gap-2 mt-2">
              <button className="bg-[#f9f7f7] rounded-lg shadow-sm border hover:border-gray-300">Update</button>
              <button className="bg-[#f9f7f7] rounded-lg shadow-sm border  hover:border-red-200">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
