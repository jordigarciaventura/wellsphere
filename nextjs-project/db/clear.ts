import { db } from "@/db";
import { sql } from "drizzle-orm";

async function clear() {
  console.log("🗑️  Fetching all schemas and tables");

  try {
    // Query to get all schemas and their tables
    const schemasAndTables = await db.execute(sql`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_type = 'BASE TABLE' AND table_schema NOT IN ('information_schema', 'pg_catalog');
    `);

    if (!schemasAndTables.rows || schemasAndTables.rows.length === 0) {
      throw new Error("No schemas or tables found");
    }

    // Group tables by schema
    const schemaTableMap: Record<string, string[]> = {};
    for (const row of schemasAndTables.rows) {
      const { table_schema, table_name } = row as {
        table_schema: string;
        table_name: string;
      };
      if (!schemaTableMap[table_schema]) {
        schemaTableMap[table_schema] = [];
      }
      schemaTableMap[table_schema].push(table_name);
    }

    console.log("🗑️  Preparing to empty all tables in all schemas");
    const queries = [];

    for (const [schema, tables] of Object.entries(schemaTableMap)) {
      for (const table of tables) {
        console.log(`🧨 Preparing truncate query for ${schema}.${table}`);
        // Correctly construct schema-qualified table identifiers
        queries.push(
          sql`TRUNCATE TABLE ${sql.identifier(schema, table)} CASCADE;`,
        );
      }
    }

    if (queries.length === 0) {
      console.warn(
        "⚠️ No queries to execute. The database may already be empty.",
      );
      return;
    }

    console.log("📨 Sending truncate queries...");
    await db.transaction(async (tx) => {
      for (const query of queries) {
        await tx.execute(query);
      }
    });
    console.log("✅ All schemas and tables emptied");
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
