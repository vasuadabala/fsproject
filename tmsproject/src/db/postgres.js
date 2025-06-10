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
    .then(() => client.query("SELECT * FROM train_info"))
    .then(result => result.rows)
    .finally(() => client.end());
}


export function getTrainById(train_id) {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "tms",
    password: "vas123@#",
    port: 5432,
  });

  return client.connect()
    .then(() => client.query("SELECT * FROM train_info WHERE train_id = $1", [train_id]))
    .then(result => result.rows[0])
    .finally(() => client.end());
}


export function saveTrainInfo(req) {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "tms",
    password: "vas123@#",
    port: 5432,
  });

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
    running_frequency,
    train_id
  } = req.body;

  const query = `
    INSERT INTO train_info (
      train_no, train_name, starting_station, starting_time,
      destination_station, arrival_time, travel_duration,
      no_of_stations, stn_btn_src_des, couch_composition, running_frequency
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
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

  return client.connect()
    .then(() => client.query(query, values))
    .then(result => result.rows[0])
    .catch(err => {
      console.error("Insert error:", err);
      throw new Error("Error inserting train data.");
    })
    .finally(() => client.end());
}


export function updateTrainInfo(data) {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "tms",
    password: "vas123@#",
    port: 5432,
  });

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

  const updatequery = `
    UPDATE train_info
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
    RETURNING *;
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
    JSON.stringify(running_frequency),
    train_id 
  ];

  return client.connect()
    .then(() => {
      return client.query("SELECT * FROM train_info WHERE train_id = $1", [train_id]);
    })
    .then(result => {
      if (result.rows.length === 0) {
        throw new Error("Train ID does not exist");
      }
      return client.query(updatequery, values);
    })
    .then(result => {
      return { success: true, train: result.rows[0] };
    })
    .catch(err => {
      console.error("Error:", err);
      throw err;
    })
    .finally(() => {
      client.end();
    });
}
