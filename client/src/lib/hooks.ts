import { useCallback, useEffect, useState } from "react";
import { api } from "./api";
import type { User } from "./types";

export function useUser(): { user: User | null; loading: boolean; refresh: () => void } {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    api
      .me()
      .then((r) => setUser(r.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { user, loading, refresh };
}
