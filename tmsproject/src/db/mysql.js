// create mysql connection
import mysql from 'mysql2/promise';
import { config } from '../config.js';  
// import { logger } from '../utils/logger.js';
const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
});

// write a function to get a client from the pool
export const getClient = async () => {
  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    // logger.error('Error getting client from pool', error);
    throw error;
  }
};

// write a function execute a select query on employee table
export const executeSelectQuery = async (query, params = []) => {
  const connection = await getClient();
  try {
    const [rows] = await connection.execute(query, params);
    return rows;
  } catch (error) {
    // logger.error('Error executing select query', error);
    throw error;
  } finally {
    connection.release();
  }
};