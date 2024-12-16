import { db } from "@/db";
import { sql } from "drizzle-orm";

async function reset() {
  const tableSchema = db._.schema as Record<string, { dbName: string }>;
  if (!tableSchema) {
    throw new Error("No table schema found");
  }

  console.log("🗑️  Emptying the entire database");
  const queries = Object.values(tableSchema).map((table) => {
    console.log(`🧨 Preparing delete query for table: ${table.dbName}`);
    return sql`TRUNCATE TABLE ${sql.identifier(table.dbName)};`;
  });

  try {
    console.log("📨 Sending delete queries...");
    await db.transaction(async (tx) => {
      await Promise.all(
        queries.map(async (query) => {
          if (query) await tx.execute(query);
        }),
      );
    });
    console.log("✅ Database emptied");
  } catch (e) {
    console.log(e);
  }

  // Remove public schemas
  try {
    console.log("🗑️  Dropping public schema");
    await db.execute(sql`DROP SCHEMA public CASCADE;`);
    console.log("✅ Public schema dropped");
  } catch (e) {
    console.log(e);
  }

  try {
    console.log("📨 Creating public schema");
    await db.execute(sql`CREATE SCHEMA public;`);
    console.log("✅ Public schema created");
  } catch (e) {
    console.log(e);
  }
}

reset()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
