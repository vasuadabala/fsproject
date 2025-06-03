// This code connects to a PostgreSQL database, retrieves train information, 
// and exports the function to be used elsewhere in the application.
import { Client } from "pg";
export function getTrainInfo() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "tms",
    password: "vas123@#",
    port: 5432,
  });

  return client.connect()
    .then(() => {
      console.log("Connected to the database");
      return client.query("SELECT * FROM train_info");
    })
    .catch((err) => {
      client.end();
      throw err;
    });
}


