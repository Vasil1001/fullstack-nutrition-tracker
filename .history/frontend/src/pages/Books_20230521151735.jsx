import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

export default function Books() {
  const [books, setBooks] = React.useState([])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/books')
    const data = await response.json()

    setBooks(data)
    console.log(books)
  }

  useEffect(() => {
    // const fetchAllBooks = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:8080/books')
    //       console.log(response)
    //     } catch (error) {
    //       console.log(err)
    //     }
    //   }
    fetchBooks()
    // fetchAllBooks()
  }, [])

  return <div className="text-white">Books</div>
}
