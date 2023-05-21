import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

export default function Books() {
    const [books, setBooks] = React.useState([])
    
    const fetchAllBooks = async () => {
        try {
            const response = await Axios.get('http://localhost:8080/books')
            console.log(response)
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
