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
    <div className="flex flex-col justify-center text-white">
      <h1>Food meals list</h1>
      <div className="flex flex-col justify-center">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <h1>{book.title}</h1>
            {book.cover && <img src={book.cover} alt={book.title} />}
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  )
}
