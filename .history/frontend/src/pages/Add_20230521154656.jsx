import React, { useState } from 'react'

export default function Add() {
    const [book, setBook] = useState({
        title: '',
        desc: '',
        price: 'null',
        cover: '',
    })

    const handleChange = (e) => {
        setBook({...preview, [e.target.bane]})
    }
  return (
    <div className="form">
        <h1>Add a new book</h1>
        <input type="text" palceholder='title' name='title' onChange={handleChange}/>
        <input type="text" placeholder='desc' name='desc' onChange={handleChange}/>
        <input type="number" placeholder='price' name='price' onChange={handleChange}/>
        <input type="text" placeholder='cover' name='cover' onChange={handleChange}/>
    </div>
  )
}
