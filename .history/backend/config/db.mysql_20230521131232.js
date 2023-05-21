const mysql = require("mysql")
const colors = require("colors")
const dbConfig = require("./db.config")

function dbConnectMySQL() {}
// * Create a MySQL Database connection
export const db = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
})

// * Open the MySQL connection
 dbConnectMySQL() {
  db.connect((error) => {
    if (error) throw error
    console.log("Successfully connected to MySQL database.".blue.underline)
  })

}
dbConnectMySQL(db)
module.exports = dbConnectMySQL
