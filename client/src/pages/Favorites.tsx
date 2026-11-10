import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { useUser } from "../lib/hooks";
import type { FavoriteRow } from "../lib/types";
import HikeImage from "../components/HikeImage";
import { Alert, Badge, Card, Spinner, categoryLabel, categoryTone } from "../components/ui";

export default function Favorites() {
  const { user } = useUser();
  const [favs, setFavs] = useState<FavoriteRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    setFavs(null);
    api
      .favorites()
      .then((r) => setFavs(r.favorites))
      .catch((e) => setError((e as Error).message));
  }, [user]);

  if (!user) {
    return (
      <div className="mx-auto max-w-md">
        <Alert tone="info">
          <Link to="/login" className="font-medium underline">
            Log in
          </Link>{" "}
          to see your saved hikes.
        </Alert>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-black tracking-tight">Your shortlist</h1>
      <p className="mt-1 text-on-surface-variant">Saved hikes, for the group chat vote.</p>

      {error && (
        <div className="mt-6">
          <Alert>{error}</Alert>
        </div>
      )}
      {!favs && !error && (
        <div className="mt-12 flex justify-center">
          <Spinner />
        </div>
      )}
      {favs && favs.length === 0 && (
        <Card className="mt-8 p-8 text-center text-on-surface-variant">
          Nothing saved yet —{" "}
          <Link to="/" className="font-medium text-primary hover:underline">
            browse the hikes
          </Link>{" "}
          and hit “Save to favorites”.
        </Card>
      )}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {favs?.map((f) => (
          <Link key={f.id} to={`/hikes/${f.slug}`} className="group block h-full">
            <Card className="flex h-full flex-col overflow-hidden transition group-hover:-translate-y-0.5 group-hover:shadow-md">
              <HikeImage slug={f.slug} alt={f.name} className="h-44 w-full" />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold leading-snug transition group-hover:text-primary">
                    {f.name}
                  </h3>
                  {f.is_composite ? <Badge tone="composite">composite</Badge> : null}
                </div>
                <p className="mt-1 text-sm text-on-surface-variant">{f.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge tone={categoryTone(f.category)}>{categoryLabel(f.category)}</Badge>
                  <Badge tone="neutral">{f.days} days</Badge>
                  <Badge tone="neutral">+{f.avg_daily_ascent} m/day</Badge>
                </div>
                <p className="mt-auto pt-3 text-xs text-on-surface-variant">{f.country}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
