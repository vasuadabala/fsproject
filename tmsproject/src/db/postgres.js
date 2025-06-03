const {Client} = require('pg');
const client = new Client({
  user:"postgres",
  host:"localhost",
  database:"tms",
  password:"vas123@#",
  port:5432
})
client.connect()
.then(()=> console.log("Connected to the database"))
.catch((err)=> console.log("Connection error", err.stack));

client.query("SELECT * FROM train_info")
.then((res) => {
  console.log("Query result:", res.rows);
})
.catch((err) => {
  console.log("Error executing query:", err.stack);
})
