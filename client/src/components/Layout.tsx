import type { ReactNode } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { useUser } from "../lib/hooks";
import { Button } from "./ui";

export default function Layout({ children }: { children: ReactNode }) {
  const { user } = useUser();
  const navigate = useNavigate();

  const navLink = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-1.5 text-sm font-medium transition ${
      isActive
        ? "bg-primary-container text-on-primary-container"
        : "text-on-surface-variant hover:text-on-surface"
    }`;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-[1000] border-b border-outline bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-black text-on-primary">
              G
            </span>
            GoldiTrails
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/" end className={navLink}>
              Hikes
            </NavLink>
            <NavLink to="/zone" className={navLink}>
              The Zone
            </NavLink>
            {user && (
              <NavLink to="/favorites" className={navLink}>
                Favorites
              </NavLink>
            )}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-on-surface-variant">Hi, {user.username}</span>
                <Button
                  variant="outline"
                  onClick={async () => {
                    await api.logout();
                    navigate("/");
                  }}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-sm font-medium text-on-surface-variant hover:text-on-surface"
                >
                  Log in
                </NavLink>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>

      <footer className="mx-auto w-full max-w-6xl px-4 py-8 text-xs text-on-surface-variant">
        GoldiTrails — hikes that aren't too flat and not too brutal. Distances and gains from public trail
        guides; map waypoints are approximate, not for navigation.
      </footer>
    </div>
  );
}
