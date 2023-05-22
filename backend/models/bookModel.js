const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter book title"],
  },
  desc: {
    type: String,
    required: [true, "Please enter book description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter book price"],
  },
  cover: {
    type: String,
    required: [false],
  },
})

module.exports = mongoose.model("Book", bookSchema)
