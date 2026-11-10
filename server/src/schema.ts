import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import knex from "./db";

const dir = path.dirname(fileURLToPath(import.meta.url));

export async function ensureDataDir() {
  const dataDir = path.join(dir, "..", "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
}

export async function createSchema() {
  await ensureDataDir();
  await knex.raw("PRAGMA journal_mode = WAL");
  await knex.schema.createTableIfNotExists("users", (t) => {
    t.increments("id").primary();
    t.string("username", 64).notNullable();
    t.string("email", 128);
    t.string("password_hash", 256).notNullable();
    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
  await knex.raw("CREATE UNIQUE INDEX IF NOT EXISTS users_username_unique ON users (username)");
  await knex.raw("CREATE UNIQUE INDEX IF NOT EXISTS users_email_unique ON users (email)");
  await knex.schema.createTableIfNotExists("sessions", (t) => {
    t.string("sid", 128).primary();
    t.timestamp("expires").notNullable();
    t.text("data").notNullable();
  });
  await knex.schema.createTableIfNotExists("hikes", (t) => {
    t.increments("id").primary();
    t.string("slug", 128).notNullable();
    t.string("name", 190).notNullable();
    t.string("tagline", 255);
    t.string("category", 16).notNullable();
    t.boolean("is_composite").defaultTo(false);
    t.string("zone_note", 255);
    t.string("country", 64).notNullable();
    t.string("region", 128);
    t.float("total_km").notNullable();
    t.integer("days").notNullable();
    t.integer("total_ascent").notNullable();
    t.integer("total_descent");
    t.integer("max_elevation").notNullable();
    t.integer("min_elevation");
    t.integer("avg_daily_ascent").notNullable();
    t.string("highest_point", 190);
    t.string("exposure", 255);
    t.string("food_lodging", 255);
    t.string("season", 128);
    t.text("description");
    t.text("sources");
    t.boolean("featured").defaultTo(false);
  });
  await knex.raw("CREATE UNIQUE INDEX IF NOT EXISTS hikes_slug_unique ON hikes (slug)");
  await knex.schema.createTableIfNotExists("hike_sections", (t) => {
    t.increments("id").primary();
    t.integer("hike_id").notNullable().references("hikes.id").onDelete("CASCADE");
    t.integer("day").notNullable();
    t.string("name", 190).notNullable();
    t.string("from_place", 128);
    t.string("to_place", 128);
    t.float("km");
    t.integer("ascent");
    t.integer("descent");
    t.integer("max_elev");
    t.integer("start_elev");
    t.integer("end_elev");
    t.string("stay", 190);
    t.string("source_trail", 190);
    t.string("source_detail", 255);
    t.boolean("is_bypass").defaultTo(false);
    t.string("exposure", 190);
    t.text("notes");
    t.text("waypoints");
    t.integer("sort_order");
  });
  await knex.schema.createTableIfNotExists("user_hikes", (t) => {
    t.integer("user_id").notNullable().references("users.id").onDelete("CASCADE");
    t.integer("hike_id").notNullable().references("hikes.id").onDelete("CASCADE");
    t.timestamp("created_at").defaultTo(knex.fn.now());
    t.primary(["user_id", "hike_id"]);
  });
}
