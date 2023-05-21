import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div className="text-white">
      <h1>Food meals list</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <h1>{book.title}</h1>
            {book.cover ? <img src={book.cover} alt={book.title} : 'w' />}
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
