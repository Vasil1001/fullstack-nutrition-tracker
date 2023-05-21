import React, { useEffect, useState } from 'react'

export default function Books() {
    const [books, setBooks] = React.useState([])
    
    const fetchAllBooks = async () => {
        try {
            const response = axios
        } catch (error) {
            
        }
        
    }

    useEffect(() => {
        fetchAllBooks()
    }, [])

  return (
    <div className="text-white">Books</div>
  )
}
