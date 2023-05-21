import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

export default function Books() {
  const [books, setBooks] = React.useState([])

  

  useEffect(() => {
    fetchAllBooks()
  }, [])

  return <div className="text-white">Books</div>
}
