const asyncHandler = require("express-async-handler")
const Book = require("../models/bookModel")

// @desc Get books
// @route GET /books
// @access Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({})

  if (!books) {
    res.status(404)
    throw new Error("No books found")
  }
  res.status(200).json(books)
})

// @desc Get book
// @route GET /:id
// @access Private
const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(404)
    throw new Error("Book not found")
  }
  res.status(200).json(book)
})

// @desc Create book
// @route POST /books
// @access Private
const createBook = asyncHandler(async (req, res) => {
  const { title, desc, price, cover } = req.body

  if ( !title || !desc || !price) {
    res.status(400)
    throw new Error("Please fill in all fields")
  }

  const book = await Book.create({
    title,
    desc,
    price,
    cover,
  })

  res.status(201).json(book)
})

// @desc Delete book
// @route DELETE /:id
// @access Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(404)
    throw new Error("Book not found")
  }

  await Book.findByIdAndDelete(req.params.id.trim())
  res.status(200).json({ message: "Book deleted" })
})

// @desc Update book
// @route PUT /:id
// @access Private
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(404)
    throw new Error("Book not found")
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body)

  res.status(200).json(updatedBook)
})

module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
}
