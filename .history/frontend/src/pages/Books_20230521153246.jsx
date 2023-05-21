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

  return <div className="text-white">
    
    <h1>Food meals list</h1>
    <div className="books"></div>
  </div>
}
