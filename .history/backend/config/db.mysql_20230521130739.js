const mysql = require("mysql")
const colors = require("colors")
const dbConfig = require("./db.config")

// * Create a MySQL Database connection
const db = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
})

// * Open the MySQL connection
dbConnectdb.connect((error) => {
    if (error) throw error
    console.log("Successfully connected to MySQL database.".blue.underline)
  })
module.exports = db
