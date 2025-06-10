//import {getClient} from "./pgclient.js";
import { Client } from "pg";

const client = new Client({
  user: "tmsadmin",
  host: "localhost",
  database: "postgres",
  password: "tmsadmin",
  port: 5432,
});

//const client = getClient();

export function getTrainInfo() {
  
  return client.connect()
    .then(() => {
      console.log("Connected to the database");
      return client.query("SELECT * FROM train_info");
    })
    .then(result => result.rows)
    .finally(() => client.end());
}

// Function to insert train info
export function postTrainInfo(req, res) {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "tms",
    password: "vas123@#",
    port: 5432,
  });

  client.connect();

  const {
    train_id,
    train_no,
    train_name,
    starting_station,
    starting_time,
    destination_station,
    arrival_time,
    travel_duration,
    no_of_stations,
    stn_btn_src_des,
    couch_composition,
    running_frequency,
  } = req.body;  

  const query = `
    INSERT INTO train_info (
      train_id, train_no, train_name, starting_station, starting_time,
      destination_station, arrival_time, travel_duration,
      no_of_stations, stn_btn_src_des, couch_composition, running_frequency
    ) VALUES (
      $1, $2, $3, $4, $5,
      $6, $7, $8,
      $9, $10, $11, $12
    ) RETURNING *
  `;

  const values = [
    train_id,
    train_no,
    train_name,
    starting_station,
    starting_time,
    destination_station,
    arrival_time,
    travel_duration,
    no_of_stations,
    JSON.stringify(stn_btn_src_des),
    JSON.stringify(couch_composition),
    running_frequency,
  ];

  client.query(query, values)
    .then(result => {
      console.log("Inserted:", result.rows[0]);
      return result;
    })
    .catch(err => {
      console.error("Insert error:", err);
      res.send("Error inserting train data.");
    })
    .finally(() => client.end());
}

export function saveTrainInfo(req) {
   
  
  const {
    train_no,
    train_name,
    starting_station,
    starting_time,
    destination_station,
    arrival_time,
    travel_duration,
    no_of_stations,
    stn_btn_src_des,
    couch_composition,
    running_frequency
  } = req.body;
  const query = `
    INSERT INTO train_info (
     train_no, train_name, starting_station, starting_time,
      destination_station, arrival_time, travel_duration,
      no_of_stations, stn_btn_src_des, couch_composition, running_frequency
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  `;
  const values = [
    train_no,
    train_name,
    starting_station,
    starting_time,
    destination_station,
    arrival_time,
    travel_duration,  
    no_of_stations,
    JSON.stringify(stn_btn_src_des),
    JSON.stringify(couch_composition),
    running_frequency
  ];
  return client.query(query, values)
    .then(result => {
      console.log("Inserted:", result);
      return result; // Return the inserted row
    })
    .catch(err => {
      console.error("Insert error:", err);
      throw new Error("Error inserting train data.");
    })
    .finally(() => client.end());


}

export function getTrainById(train_id) {
  client.connect();

  const query = "SELECT * FROM train_info WHERE train_id = $1";
  const values = [train_id];

  return client.query(query, values)
    .then(result => {
      if (result.rows.length === 0) {
        throw new Error("Train not found");
      }
      return result.rows[0];
    })
    .catch(err => {
      console.error("Error fetching train by ID:", err);
      throw new Error("Error fetching train data.");
    })
    .finally(() => client.end());
}

export function putTrainInfo( data) {
 
  client.connect();

  const {
    train_id,
     train_no,
     train_name,
     starting_station,
     starting_time,
     destination_station,
     arrival_time,
     travel_duration,
     no_of_stations,
     stn_btn_src_des,
     couch_composition,
     running_frequency
   } = data;
  
   const updatequery = 
     `UPDATE train_info
     SET 
       train_no = $1,
       train_name = $2,
       starting_station = $3,
       starting_time = $4,
       destination_station = $5,
       arrival_time = $6,
       travel_duration = $7,
       no_of_stations = $8,
       stn_btn_src_des = $9,
       couch_composition = $10,
       running_frequency = $11
     WHERE train_id = $12
   `;
   const values = [
    
     train_no,
     train_name,
     starting_station,
     starting_time,
     destination_station,
     arrival_time,
     travel_duration,
     no_of_stations,
     JSON.stringify(stn_btn_src_des),
     JSON.stringify(couch_composition),
     running_frequency,
     train_id
   
   ];

  getTrainById(data.train_id)
    .then(train => {
      if (!train) {
        throw new Error("Train not found");
      }
      else {
        return client.query(updatequery, values)
    .then(result => {
      console.log("Updated:", result.rowCount);
      return result; // Return the updated row count
    })
    .catch(err => {
      console.error("Update error:", err);
      throw new Error("Error updating train data.");
    })
    .finally(() => client.end());
      }
    })
    .catch(err => {
      console.error("Error checking train existence:", err);
      throw new Error("Train ID does not exist in the database.");
    });
  

  
} 