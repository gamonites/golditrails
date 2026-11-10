import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../lib/api";
import { useUser } from "../lib/hooks";
import type { HikeDetailData } from "../lib/types";
import DayTable from "../components/DayTable";
import ElevationProfile from "../components/ElevationProfile";
import TrailMap from "../components/TrailMap";
import { Alert, Badge, Button, Card, Spinner, Stat, categoryLabel, categoryTone } from "../components/ui";

export default function HikeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<HikeDetailData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [favIds, setFavIds] = useState<Set<number>>(new Set());
  const [busy, setBusy] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setData(null);
    setError(null);
    if (slug) api.hike(slug).then(setData).catch((e) => setError((e as Error).message));
  }, [slug]);

  useEffect(() => {
    if (user) {
      api
        .favorites()
        .then((r) => setFavIds(new Set(r.favorites.map((f) => f.id))))
        .catch(() => setFavIds(new Set()));
    } else {
      setFavIds(new Set());
    }
  }, [user]);

  const toggleFav = async () => {
    if (!user || !data) return;
    setBusy(true);
    try {
      const id = data.hike.id;
      if (favIds.has(id)) await api.removeFavorite(id);
      else await api.addFavorite(id);
      setFavIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    } catch (e) {
      setError((e as Error).message);
    }
    setBusy(false);
  };

  if (error && !data)
    return (
      <div>
        <Link to="/" className="text-sm text-primary hover:underline">
          ← All hikes
        </Link>
        <Alert className="mt-4">{error}</Alert>
      </div>
    );
  if (!data)
    return (
      <div className="mt-16 flex justify-center">
        <Spinner />
      </div>
    );

  const { hike, sections, profile, composition } = data;
  const isFav = favIds.has(hike.id);

  return (
    <div>
      <Link to="/" className="text-sm text-primary hover:underline">
        ← All hikes
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-black tracking-tight">{hike.name}</h1>
            <Badge tone={categoryTone(hike.category)}>{categoryLabel(hike.category)}</Badge>
            {hike.isComposite && <Badge tone="composite">composite route</Badge>}
          </div>
          <p className="mt-1 text-on-surface-variant">{hike.tagline}</p>
          <p className="mt-1 text-sm text-on-surface-variant">
            {hike.country}
            {hike.region ? ` · ${hike.region}` : ""}
            {hike.season ? ` · best in ${hike.season}` : ""}
          </p>
        </div>
        <Button onClick={toggleFav} disabled={!user || busy} variant={isFav ? "outline" : "primary"}>
          {isFav ? "★ Saved" : "☆ Save to favorites"}
        </Button>
      </div>

      {hike.zoneNote && (
        <div className="mt-4">
          <Alert tone="info">{hike.zoneNote}</Alert>
        </div>
      )}

      {error && (
        <div className="mt-4">
          <Alert>{error}</Alert>
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Stat label="Days" value={`${hike.days}`} />
        <Stat label="Distance" value={`${hike.totalKm.toLocaleString()} km`} />
        <Stat label="Total climbing" value={`+${hike.totalAscent.toLocaleString()} m`} />
        <Stat
          label="Per day"
          value={`+${hike.avgDailyAscent.toLocaleString()} m`}
          sub={`${Math.round(hike.totalKm / hike.days)} km/day`}
        />
        <Stat label="Max elevation" value={`${hike.maxElevation.toLocaleString()} m`} sub={hike.highestPoint ?? undefined} />
        <Stat label="Lowest" value={`${hike.minElevation.toLocaleString()} m`} />
      </div>

      {hike.description && <p className="mt-6 max-w-3xl leading-relaxed">{hike.description}</p>}

      {hike.exposure && (
        <p className="mt-3 text-sm text-on-surface-variant">
          <span className="font-semibold">Exposure:</span> {hike.exposure}
        </p>
      )}
      {hike.foodLodging && (
        <p className="mt-1 text-sm text-on-surface-variant">
          <span className="font-semibold">Food &amp; lodging:</span> {hike.foodLodging}
        </p>
      )}

      {composition && composition.length > 0 && (
        <Card className="mt-8 p-6">
          <h2 className="text-lg font-bold">What this route is made of</h2>
          <p className="mt-1 text-sm text-on-surface-variant">
            A composite: sections of existing trails, with the cruxes swapped for bypasses.
          </p>
          <ul className="mt-4 space-y-3">
            {composition.map((c) => (
              <li key={c.day} className="rounded-lg border border-outline-variant bg-surface-low/50 p-3 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold">Day {c.day} — {c.name}</span>
                  {c.isBypass && (
                    <Badge tone="composite">bypass</Badge>
                  )}
                </div>
                <div className="mt-1 text-on-surface-variant">
                  {c.sourceTrail ? (
                    <>
                      From <span className="font-medium text-on-surface">{c.sourceTrail}</span>
                      {c.sourceDetail ? `: ${c.sourceDetail}` : "."}
                    </>
                  ) : (
                    c.sourceDetail ?? ""
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Card className="mt-8 p-6">
        <h2 className="text-lg font-bold">Elevation profile</h2>
        <p className="mt-1 text-sm text-on-surface-variant">
          Synthetic profile built from daily start/end/high elevations — shape, not survey.
        </p>
        <div className="mt-4">
          <ElevationProfile profile={profile} sections={sections} />
        </div>
      </Card>

      <Card className="mt-8 p-6">
        <h2 className="text-lg font-bold">Route map</h2>
        <p className="mt-1 text-sm text-on-surface-variant">
          Approximate waypoints (not for navigation). Dashed segments are bypasses in composite routes.
        </p>
        <div className="mt-4">
          <TrailMap sections={sections} />
        </div>
      </Card>

      <Card className="mt-8 p-6">
        <h2 className="mb-4 text-lg font-bold">Day by day</h2>
        <DayTable sections={sections} />
      </Card>

      {hike.sources.length > 0 && (
        <div className="mt-8 text-xs text-on-surface-variant">
          <span className="font-semibold">Sources:</span>{" "}
          {hike.sources.map((s, i) => (
            <span key={i}>
              {s}
              {i < hike.sources.length - 1 ? " · " : ""}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
