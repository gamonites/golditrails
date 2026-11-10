import { scryptSync, randomBytes, timingSafeEqual } from "node:crypto";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import type { Request } from "express";
import knex from "./db";

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const check = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return check.length === expected.length && timingSafeEqual(check, expected);
}

export function setupPassport() {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await knex("users").where({ username }).first();
        if (!user || !verifyPassword(password, user.password_hash as string)) {
          return done(null, false, { message: "Invalid username or password" });
        }
        done(null, user);
      } catch (err) {
        done(err);
      }
    }),
  );

  passport.serializeUser((user: any, done) => done(null, user.id));
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await knex("users").where({ id }).first();
      done(null, user ?? false);
    } catch (err) {
      done(err);
    }
  });
}

export function requireAuth(req: Request, res: any, next: any) {
  if (req.isAuthenticated && req.isAuthenticated()) return next();
  res.status(401).json({ error: "Authentication required" });
}
