const express = require("express")
const cors = require("cors")
const colors = require("colors")
const mysql = require("mysql")
const db = require("./config/db.mysql") // ? DB Connection at config folder

// * Initialize port to listen for requests and express
const PORT = process.env.PORT || 8080
const app = express()

// * Parse requests of json, url, cors content-type
app.use(express.json()) // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(cors()) // Use cors middleware

// * Set Routes
// app.use("/api/users", require("./routes/userRoutes"))
// app.use("/api/tickets", require("./routes/ticketRoutes"))

// * Serve Frontend - allow backend to be reached from frontend - get req from user and send a response
app.get("/", (req, res) => {
  res.json({ message: "Hello, Express.js json!" })
})

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books"
  db.query(q, (err, data) => {
    if (err) throw err
    return res.json(data)
  })
})

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`,'price' `cover`) VALUES (?)"
  const values = [
   req.body.title,
   req.body.desc,
   req.body.price,
   req.body.cover,
  ]

  db.query(q, [values], (err, data) => {
    if (err) throw err
    return res.json("New book added successfully")
  })
})

// * Listen to port for requests
app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}.`.yellow.underline.bold)
)

// * Full Serve Frontend for vercel deploy
// if (process.env.NODE_ENV === 'production') {
//     // Set build folder as static
//     app.use(express.static(path.join(__dirname, '../frontend/build')))

//     // FIX: below code fixes app crashing on refresh in deployment
//     app.get('*', (_, res) => {
//       res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
//     })
//   } else {
//     app.get('/', (_, res) => {
//       res.status(200).json({ message: 'Welcome to the Support Desk API' })
//     })
//   }
