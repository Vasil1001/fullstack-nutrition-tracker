import React, { useEffect, useState } from 'react'

export default function Books() {
    const [books, setBooks] = React.useState([])
    
    const fetchBooks = async () => {
        const response = awawit fetch('https://www.googleapis.com/books/v1/')
        
    }

    useEffect(() => {
        
    }, [])

  return (
    <div className="text-white">Books</div>
  )
}
