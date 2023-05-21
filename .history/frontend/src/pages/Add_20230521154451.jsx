import React from 'react'

export default function Add() {
  return (
    <div className="form">
        <h1>Add a new book</h1>
        <input type="text" palceholder='title'/>
        <input type="text" placeholder='desc'/>
        <input type="number" placeholder='price'/>
        <input type="text" />
    </div>
  )
}
