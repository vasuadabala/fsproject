
// create postgres connection
import { Pool } from 'pg';
import { config } from '../config.js';    
// import { logger } from '../utils/logger.js';
const pool = new Pool({
  user: config.db.user,
  host: config.db.host,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
});

// write a function to get a client from the pool
export const getClient = async () => {
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    // logger.error('Error getting client from pool', error);
    throw error;
  }
};

// write a function execute a select query on employee table
export const executeSelectQuery = async (query, params = []) => {
  const client = await getClient();
  try {
    const res = await client  
      .query(query, params);
    return res.rows;
  }
  catch (error) {
    // logger.error('Error executing select query', error);
    throw error;
  } finally {
    client.release();
  }