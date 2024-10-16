import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  connectionString: process.env.POSTGRES_URL,
});

client.connect();
export const db = drizzle(client);