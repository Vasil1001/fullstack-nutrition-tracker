const express = require("express")
const router = express.Router()

const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController")

router.route("/books").get(getBooks).post(createBook)
router.route("/books/:id").get(getBook).delete(deleteBook).put(updateBook)

module.exports = router