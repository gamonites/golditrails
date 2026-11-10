import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { Alert, Button, Card, Input } from "../components/ui";

export default function Auth({ mode }: { mode: "login" | "register" }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      if (mode === "login") await api.login(username, password);
      else await api.register(username, password, email || undefined);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
    setBusy(false);
  };

  return (
    <div className="mx-auto max-w-md">
      <Card className="p-8">
        <h1 className="text-2xl font-black tracking-tight">
          {mode === "login" ? "Welcome back" : "Create an account"}
        </h1>
        <p className="mt-1 text-sm text-on-surface-variant">
          {mode === "login"
            ? "Log in to save your shortlist of Goldilocks hikes."
            : "Sign up to save your shortlist of Goldilocks hikes."}
        </p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="bugcatcher"
            minLength={3}
            required
            autoFocus
          />
          {mode === "register" && (
            <Input
              label="Email (optional)"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          )}
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={mode === "register" ? "At least 6 characters" : "Your password"}
            minLength={6}
            required
          />
          {error && <Alert>{error}</Alert>}
          <Button type="submit" disabled={busy} className="w-full">
            {busy ? "One moment…" : mode === "login" ? "Log in" : "Sign up"}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-on-surface-variant">
          {mode === "login" ? (
            <>
              No account yet?{" "}
              <Link to="/register" className="font-medium text-primary hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already registered?{" "}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Log in
              </Link>
            </>
          )}
        </p>
      </Card>
    </div>
  );
}
