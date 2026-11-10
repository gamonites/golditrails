import expressSession from "express-session";
import knex from "./db";

const { Store } = expressSession;

interface SessionRow {
  sid: string;
  expires: Date | string;
  data: string;
}

export class SqliteSessionStore extends Store {
  async get(sid: string, cb: (err: null | Error, sess: any | undefined) => void) {
    try {
      const row = await knex("sessions").where({ sid }).first();
      if (!row) return cb(null, undefined);
      const expires = new Date(row.expires as unknown as string);
      if (expires < new Date()) {
        await knex("sessions").where({ sid }).del();
        return cb(null, undefined);
      }
      cb(null, JSON.parse(row.data as string));
    } catch (err) {
      cb(err as Error);
    }
  }

  async set(sid: string, sess: any, cb: (err: null | Error) => void) {
    try {
      const expires = sess.cookie?.expires ? new Date(sess.cookie.expires) : new Date(Date.now() + 7 * 24 * 3600 * 1000);
      await knex("sessions").insert({ sid, expires, data: JSON.stringify(sess) }).onConflict("sid").merge();
      cb(null);
    } catch (err) {
      cb(err as Error);
    }
  }

  async destroy(sid: string, cb: (err: null | Error) => void) {
    try {
      await knex("sessions").where({ sid }).del();
      cb(null);
    } catch (err) {
      cb(err as Error);
    }
  }

  async touch(sid: string, sess: any, cb: (err: null | Error) => void) {
    try {
      const expires = sess.cookie?.expires ? new Date(sess.cookie.expires) : new Date(Date.now() + 7 * 24 * 3600 * 1000);
      await knex("sessions").where({ sid }).update({ expires });
      cb(null);
    } catch (err) {
      cb(err as Error);
    }
  }
}

export function isAuthed(req: Request): boolean {
  return !!req.session && !!(req.session as any).userId;
}
