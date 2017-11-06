// Connect to mysql ===================================================================================================
var mysql = require("mysql");

// Check to see if there is a connection and if not set one up ========================================================
  connection = mysql.createConnection({
    port: 3306,
    host: "codeflink.net",
    user: "dustinsiegel",
    password: "X3LwzmZHIB1C",
    database: "dustinsiegel"
  })

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });
// Carry out the connection and console log the result ================================================================
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection file ==============================================================================================
module.exports = connection;