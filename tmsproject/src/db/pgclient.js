import { Client } from "pg";

const client = new Client({
    user: "tmsadmin",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
  });

  export function getClient() {
    return client;
  }