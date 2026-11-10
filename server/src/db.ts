import path from "node:path";
import { fileURLToPath } from "node:url";
import knexFactory from "knex";

const dir = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(dir, "..", "data");

export const knex = knexFactory({
  client: "better-sqlite3",
  connection: { filename: path.join(dataDir, "golditrails.db") },
  useNullAsDefault: true,
});

export default knex;
