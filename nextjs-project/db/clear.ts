import { db } from "@/db";
import { sql } from "drizzle-orm";

async function clear() {
  const tableSchema = db._.schema as Record<string, { dbName: string }>;
  if (!tableSchema) {
    throw new Error("No table schema found");
  }

  console.log("🗑️  Emptying all tables in the database");
  const queries = Object.values(tableSchema).map((table) => {
    console.log(`🧨 Preparing truncate query for table: ${table.dbName}`);
    return sql`TRUNCATE TABLE ${sql.identifier(table.dbName)} CASCADE;`;
  });

  try {
    console.log("📨 Sending truncate queries...");
    await db.transaction(async (tx) => {
      await Promise.all(
        queries.map(async (query) => {
          if (query) await tx.execute(query);
        }),
      );
    });
    console.log("✅ All tables emptied");
  } catch (e) {
    console.error("❌ Error while emptying tables:", e);
  }
}

clear()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
