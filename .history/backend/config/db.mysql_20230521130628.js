const mysql = require("mysql")
const colors = require("colors")
const dbConfig = require("./db.config")

// * Create a MySQL Database connection
const db = mysql.createConnection({
  host: dbConfig.,
  user: "root",
  password: "",
  database: "fullstack",
  dialect: "mysql",
  port : "3306"
})

// * Open the MySQL connection


module.exports = db
