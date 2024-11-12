import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import * as schema from "./schema";

const { Client } = pkg;

class Database {
  private static instance: Database;
  public db: ReturnType<typeof drizzle>;

  private constructor() {
    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
    });

    client.connect().catch((err) => {
      console.log(err);
    });
    this.db = drizzle(client, { schema });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

export const db = Database.getInstance().db;
