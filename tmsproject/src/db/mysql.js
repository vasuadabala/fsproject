import mysql from "mysql";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "tms",
  password: "Sai1234@",
  port: 3306
});

export function getTrainInfo() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);

      connection.query("SELECT * FROM train_info", (err, results) => {
        connection.release();
        if (err) return reject(err);
        resolve(results);
      });
    });
  });
}

export function saveTrainInfo(data) {
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
  } = data;

  const query = `
    INSERT INTO train_info (
       train_no, train_name, starting_station, starting_time,
      destination_station, arrival_time, travel_duration,
      no_of_stations, stn_btn_src_des, couch_composition, running_frequency
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);

      connection.query(query, values, (err, results) => {
        connection.release();
        if (err) return reject(err);
        resolve(results);
      });
    });
  });
}
export function updateTrainInfo(train_id) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);

      const query = 'SELECT * FROM train_info WHERE train_id = ?';
      connection.query(query, [train_id], (err, results) => {
        connection.release(); // ✅ release connection back to pool

        if (err) {
          console.error('Query error:', err);
          return reject(err);
        }

        if (results.length > 0) {
          console.log('train_id exists in the database');
          resolve({ exists: true });
        } else {
          console.log('train_id does not exist in the database');
          resolve({ exists: false });

        }
      });
    });
  });
}
