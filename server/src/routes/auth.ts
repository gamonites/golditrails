import { Router } from "express";
import passport from "passport";
import knex from "../db";
import { hashPassword } from "../passport";

const router = Router();

router.post("/register", (req, res) => {
  const { username, email, password } = req.body ?? {};
  if (!username || typeof username !== "string" || username.trim().length < 3) {
    return res.status(400).json({ error: "Username must be at least 3 characters" });
  }
  if (!password || typeof password !== "string" || password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters" });
  }
  (async () => {
    const uname = username.trim();
    const em = typeof email === "string" ? email.trim() : "";
    let query = knex("users").where({ username: uname });
    if (em) query = query.orWhere({ email: em });
    const existing = await query.first();
    if (existing) {
      return res.status(409).json({ error: "Username or email already taken" });
    }
    const [id] = await knex("users").insert({
      username: uname,
      email: em || null,
      password_hash: hashPassword(password),
    });
    const uid = (id as { toNumber: () => number }).toNumber?.() ?? (id as unknown as number);
    const user = { id: uid, username: uname, email: em || null };
    req.login(user, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Account created, but session start failed" });
        return;
      }
      res.status(201).json({ ok: true, user });
    });
  })().catch((e) => {
    console.error(e);
    res.status(500).json({ error: "Registration failed" });
  });
});

router.post(
  "/login",
  passport.authenticate("local", { failureFlash: false }),
  (req, res) => {
    req.session.userId = (req.user as any).id;
    req.session.username = (req.user as any).username;
    res.json({ ok: true, user: { id: (req.user as any).id, username: (req.user as any).username, email: (req.user as any).email } });
  },
);

router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ ok: true });
  });
});

router.get("/me", (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) return res.json({ user: null });
  res.json({ user: { id: (req.user as any).id, username: (req.user as any).username, email: (req.user as any).email } });
});

export default router;
