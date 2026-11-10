import express from "express";
import session from "express-session";
import passport from "passport";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { createSchema } from "./schema";
import { setupPassport } from "./passport";
import { SqliteSessionStore } from "./session-store";
import authRoutes from "./routes/auth";
import hikeRoutes from "./routes/hikes";

const dir = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT ?? 3001);

async function main() {
  await createSchema();
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json());

  app.use(
    session({
      store: new SqliteSessionStore(),
      secret: process.env.SESSION_SECRET ?? "golditrails-dev-secret",
      resave: false,
      saveUninitialized: false,
      cookie: { httpOnly: true, sameSite: "lax", maxAge: 7 * 24 * 3600 * 1000 },
    }),
  );

  setupPassport();
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api/auth", authRoutes);
  app.use("/api/hikes", hikeRoutes);
  app.get("/api/health", (_req, res) => res.json({ ok: true, name: "golditrails-api" }));

  const clientDist = path.join(dir, "..", "..", "client", "dist");
  if (fs.existsSync(clientDist)) {
    app.use(express.static(clientDist));
    app.use((req, res, next) => {
      if (req.method === "GET" && !req.path.startsWith("/api/")) {
        res.sendFile(path.join(clientDist, "index.html"));
        return;
      }
      next();
    });
  }

  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  });

  app.listen(PORT, () => {
    console.log(`GoldiTrails API listening on http://localhost:${PORT}`);
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
