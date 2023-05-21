import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

export default function Books() {
  const [books, setBooks] = React.useState([])

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/books')
      console.log(response)
    } catch (error) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchAllBooks()
  }, [])

  return <div className="text-white">Books</div>
}
