import { useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";
import type { Category, Hike } from "../lib/types";
import HikeCard from "../components/HikeCard";
import { Alert, Spinner } from "../components/ui";

type Filter = "all" | Category | "composite";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "just_right", label: "Just right" },
  { id: "composite", label: "Composites" },
  { id: "too_cool", label: "Too easy" },
  { id: "too_hot", label: "Too hard" },
];

export default function Home() {
  const [hikes, setHikes] = useState<Hike[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");

  useEffect(() => {
    api
      .hikes()
      .then((r) => setHikes(r.hikes))
      .catch((e) => setError((e as Error).message));
  }, []);

  const shown = useMemo(() => {
    if (!hikes) return [];
    return hikes.filter((h) => {
      if (filter === "composite" && !h.isComposite) return false;
      if (filter !== "all" && filter !== "composite" && h.category !== filter) return false;
      if (q && !`${h.name} ${h.country} ${h.region ?? ""}`.toLowerCase().includes(q.toLowerCase()))
        return false;
      return true;
    });
  }, [hikes, filter, q]);

  return (
    <div>
      <section className="rounded-xl bg-gradient-to-br from-primary-container to-surface-high p-8">
        <h1 className="max-w-3xl text-3xl font-black tracking-tight">
          Multiday hikes that aren't too flat — and not too brutal.
        </h1>
        <p className="mt-3 max-w-2xl text-on-surface-variant">
          Built from a July 2027 plan that kept circling back to one question: which big hikes give you the
          workout without the suffering? We measured 16 classic trails and designed 4 new composite routes
          that stitch together the good parts and walk around the bad ones.
        </p>
      </section>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
              filter === f.id
                ? "border-primary bg-primary text-on-primary"
                : "border-outline bg-surface-high text-on-surface-variant hover:border-primary/50"
            }`}
          >
            {f.label}
          </button>
        ))}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search trails, countries…"
          className="ml-auto w-64 rounded-md border border-outline bg-surface-high px-3 py-1.5 text-sm outline-none focus:border-primary"
        />
      </div>

      {error && (
        <div className="mt-6">
          <Alert>{error}</Alert>
        </div>
      )}
      {!hikes && !error && (
        <div className="mt-12 flex justify-center">
          <Spinner />
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((h) => (
          <HikeCard key={h.id} hike={h} />
        ))}
      </div>
      {hikes && shown.length === 0 && (
        <p className="mt-12 text-center text-on-surface-variant">No hikes match those filters.</p>
      )}
    </div>
  );
}
