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

  console.log("📨 Sending delete queries...");

  await db.transaction(async (tx) => {
    await Promise.all(
      queries.map(async (query) => {
        if (query) await tx.execute(query);
      }),
    );
  });

  console.log("✅ Database emptied");
}

reset()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
