DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('user', 'system', 'assistant', 'tool');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chats" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(140) NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dimensions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "journalEntries" (
	"userId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"title" varchar(140) NOT NULL,
	"entry" varchar(2000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"id" uuid PRIMARY KEY NOT NULL,
	"chatId" uuid NOT NULL,
	"role" "role" NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"metadata" json
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "moodEntries" (
	"userId" integer NOT NULL,
	"date" date DEFAULT now(),
	"mood" integer NOT NULL,
	CONSTRAINT "moodEntries_userId_date_pk" PRIMARY KEY("userId","date")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "moods" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "scores" (
	"userId" integer NOT NULL,
	"dimensionId" integer NOT NULL,
	"score" integer NOT NULL,
	CONSTRAINT "scores_userId_dimensionId_pk" PRIMARY KEY("userId","dimensionId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tasks" (
	"taskId" serial PRIMARY KEY NOT NULL,
	"title" varchar(140) NOT NULL,
	"desc" varchar(200),
	"userId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(20) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "journalEntries" ADD CONSTRAINT "journalEntries_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "messages" ADD CONSTRAINT "messages_chatId_chats_id_fk" FOREIGN KEY ("chatId") REFERENCES "public"."chats"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "moodEntries" ADD CONSTRAINT "moodEntries_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "scores" ADD CONSTRAINT "scores_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "scores" ADD CONSTRAINT "scores_dimensionId_dimensions_id_fk" FOREIGN KEY ("dimensionId") REFERENCES "public"."dimensions"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_created_at" ON "chats" USING btree ("createdAt");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_chat_id" ON "messages" USING btree ("chatId");