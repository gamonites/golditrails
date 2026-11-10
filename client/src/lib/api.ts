import type { FavoriteRow, Hike, HikeDetailData, User, ZoneData } from "./types";

async function req<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const res = await fetch(path, {
    credentials: "include",
    ...opts,
    headers: { "Content-Type": "application/json", ...(opts.headers ?? {}) },
  });
  if (!res.ok) {
    let msg = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      msg = body.error || msg;
    } catch {
      // keep default message
    }
    throw new Error(msg);
  }
  return res.json() as Promise<T>;
}

export const api = {
  hikes: (category?: string) =>
    req<{ hikes: Hike[] }>(category ? `/api/hikes?category=${category}` : "/api/hikes"),
  hike: (slug: string) => req<HikeDetailData>(`/api/hikes/${slug}`),
  zone: () => req<ZoneData>("/api/hikes/zone"),
  me: () => req<{ user: User | null }>("/api/auth/me"),
  login: (username: string, password: string) =>
    req<{ ok: boolean; user: User }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }),
  register: (username: string, password: string, email?: string) =>
    req<{ ok: boolean; user: User }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
    }),
  logout: () => req<{ ok: boolean }>("/api/auth/logout", { method: "POST" }),
  favorites: () => req<{ favorites: FavoriteRow[] }>("/api/hikes/favorites"),
  addFavorite: (id: number) =>
    req<{ ok: boolean; favorited: boolean }>(`/api/hikes/${id}/favorite`, { method: "POST" }),
  removeFavorite: (id: number) =>
    req<{ ok: boolean; favorited: boolean }>(`/api/hikes/${id}/favorite`, { method: "DELETE" }),
};
