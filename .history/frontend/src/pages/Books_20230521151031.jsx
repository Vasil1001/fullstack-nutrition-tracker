import React, { useEffect, useState } from 'react'

export default function Books() {
    const [books, setBooks] = React.useState([])
    
    const fetchBooks = async () => {
        const response = await fetch('https://www.googleapis.com/books/v1/')
        const data = await response.json()
        
    }

    useEffect(() => {
        
    }, [])

  return (
    <div className="text-white">Books</div>
  )
}
