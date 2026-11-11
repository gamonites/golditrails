import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../lib/api";
import { useUser } from "../lib/hooks";
import type { HikeDetailData, LogisticsCategory } from "../lib/types";
import DayTable from "../components/DayTable";
import ElevationProfile from "../components/ElevationProfile";
import HikeImage, { getManifest, type PhotoCredit } from "../components/HikeImage";
import TrailMap from "../components/TrailMap";
import { Alert, Badge, Button, Card, Spinner, Stat, categoryLabel, categoryTone } from "../components/ui";

function domainOf(u: string): string {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return u;
  }
}

const LOGISTICS_ORDER: { key: LogisticsCategory; label: string }[] = [
  { key: "transport", label: "Getting around" },
  { key: "permit", label: "Permits & rules" },
  { key: "lodging", label: "Where to sleep" },
  { key: "booking", label: "Booking & passes" },
  { key: "food", label: "Food & resupply" },
  { key: "info", label: "Good to know" },
];

export default function HikeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<HikeDetailData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [favIds, setFavIds] = useState<Set<number>>(new Set());
  const [busy, setBusy] = useState(false);
  const [photos, setPhotos] = useState<PhotoCredit[] | null>(null);
  const { user } = useUser();

  useEffect(() => {
    setPhotos(null);
    if (slug) getManifest().then((m) => setPhotos(m[slug]?.photos ?? []));
  }, [slug]);

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
  const logistics = hike.logistics;
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

      {photos && photos.length > 0 && (
        <div className="relative mt-6">
          <HikeImage slug={hike.slug} alt={hike.name} className="max-h-[440px] w-full rounded-xl border border-outline" />
          {!photos[0].safeForPublic && (
            <span className="absolute right-3 top-3 rounded-full bg-tertiary px-2.5 py-1 text-[11px] font-bold text-on-tertiary">
              Not for prod
            </span>
          )}
        </div>
      )}

      {photos && photos.length > 1 && (
        <Card className="mt-8 p-6">
          <h2 className="text-lg font-bold">Photos from the trail</h2>
          <p className="mt-1 text-sm text-on-surface-variant">
            Click a photo to open its source. Photos tagged{" "}
            <span className="font-semibold text-tertiary">Not for prod</span> come from blogs, Reddit posts, or
            websites — fine for this private app, but the ones to remove if the site ever goes public.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {photos.slice(1).map((p) => (
              <a
                key={p.file}
                href={p.source}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-lg border border-outline bg-surface-high"
              >
                <div className="relative">
                  <img
                    src={`/hikes/${p.file}`}
                    alt={`${hike.name} photo`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition group-hover:scale-[1.02]"
                  />
                  {!p.safeForPublic && (
                    <span className="absolute right-2 top-2 rounded-full bg-tertiary px-2 py-0.5 text-[10px] font-bold text-on-tertiary">
                      Not for prod
                    </span>
                  )}
                </div>
                <div className="space-y-0.5 p-2 text-[11px] leading-tight">
                  <div className="truncate text-on-surface-variant" title={p.artist}>
                    {p.artist}
                  </div>
                  <div className="truncate text-primary" title={p.source}>
                    {domainOf(p.source)} ↗
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Card>
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

      {logistics && (
        <Card className="mt-8 p-6">
          <h2 className="text-lg font-bold">Logistics &amp; Booking</h2>
          <p className="mt-1 text-sm text-on-surface-variant">
            Everything to arrange before you go — trains and shuttles, huts and hotels, food stops, passes and permits.
            Items marked <Badge tone="hot">required</Badge> genuinely block the trip if you skip them.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-outline-variant bg-surface-low/50 p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">Getting there</div>
              <p className="mt-1 text-sm leading-relaxed">{logistics.getIn}</p>
            </div>
            <div className="rounded-lg border border-outline-variant bg-surface-low/50 p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">Getting out</div>
              <p className="mt-1 text-sm leading-relaxed">{logistics.getOut}</p>
            </div>
          </div>
          <div className="mt-6 space-y-6">
            {LOGISTICS_ORDER.map(({ key, label }) => {
              const items = logistics.items.filter((i) => i.category === key);
              if (items.length === 0) return null;
              return (
                <div key={key}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{label}</h3>
                  <ul className="mt-2 space-y-2">
                    {items.map((it, idx) => (
                      <li key={it.title + idx} className="rounded-lg border border-outline-variant bg-surface-low/50 p-3">
                        <div className="flex flex-wrap items-center gap-2">
                          {it.url ? (
                            <a
                              href={it.url}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-primary hover:underline"
                              title={it.url}
                            >
                              {it.title} ↗
                            </a>
                          ) : (
                            <span className="font-semibold">{it.title}</span>
                          )}
                          {it.required && <Badge tone="hot">required</Badge>}
                        </div>
                        {(it.when !== "n/a" || it.where !== "n/a") && (
                          <div className="mt-0.5 text-xs text-on-surface-variant">
                            {[it.when, it.where].filter((v) => v && v !== "n/a").join(" · ")}
                          </div>
                        )}
                        {it.notes && <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">{it.notes}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Card>
      )}

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
