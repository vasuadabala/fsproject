const mysql = require("mysql");
const pool = mysql.createPool({
  host:"localhost",
  user:"root",
  database:"tms",
  password:"Sai1234@",
  port:3306
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the MySQL database");
    
    connection.query("select * from train_info", (err, res) => {
      connection.release();
      if (err) {
        console.log("Error executing query:", err);
      } else {
        console.log("Query result:", res);
      }
    });
  }
});
