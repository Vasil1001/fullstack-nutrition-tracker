const mysql = require("mysql")
const colors = require("colors")
const dbConfig = require("./db.config")

// * Create a MySQL Database connection
const db = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: db,
  database: "fullstack",
  dialect: "mysql",
  port : "3306"
})

// * Open the MySQL connection


module.exports = db
