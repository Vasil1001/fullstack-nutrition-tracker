import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

export default function Books() {
  const [books, setBooks] = React.useState([])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/books')
    const data = response.json()
        //       console.log(response)

    setBooks(data)
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
  }, [books])

  return <div className="text-white">Books</div>
}
