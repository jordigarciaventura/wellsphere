import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: ["./db/schema.ts", "./db/authSchema.ts"],
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
