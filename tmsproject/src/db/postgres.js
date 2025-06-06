import { Client } from "pg";
export function getTrainInfo() {
  const client = new Client({
    user: "tmsadmin",
    host: "localhost",
    database: "postgres",
    password: "tmsadmin",
    port: 5432,
  });

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
  const client = new Client({
    user: "tmsadmin",
    host: "localhost",
    database: "postgres",
    password: "tmsadmin",
    port: 5432,
  }); 
  client.connect(); 
  
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

// create json for 
}
