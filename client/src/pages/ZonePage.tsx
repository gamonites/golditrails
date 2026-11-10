import { useEffect, useState } from "react";
import { api } from "../lib/api";
import type { ZoneData } from "../lib/types";
import ZoneChart from "../components/ZoneChart";
import { Alert, Card, Spinner } from "../components/ui";

export default function ZonePage() {
  const [data, setData] = useState<ZoneData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .zone()
      .then(setData)
      .catch((e) => setError((e as Error).message));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-black tracking-tight">Where is “just right”?</h1>
      <p className="mt-3 max-w-3xl leading-relaxed text-on-surface-variant">
        The Goldilocks rule from the original planning thread: a big multiday hike that feels like a workout
        but never like punishment. Concretely: roughly <span className="font-semibold text-on-surface">+400 to
        +950 m of climbing per day</span>, and nothing above{" "}
        <span className="font-semibold text-on-surface">~2,750 m</span> — no mandatory via ferrata, no
        glacier crossings. Flat-ish trails (Cotswold, Lechweg) leave you wanting more; the Haute Route and
        AV2 leave you wanting it to be over. This chart plots every trail in the database against both axes.
      </p>

      {error && (
        <div className="mt-6">
          <Alert>{error}</Alert>
        </div>
      )}
      {!data && !error && (
        <div className="mt-12 flex justify-center">
          <Spinner />
        </div>
      )}
      {data && (
        <Card className="mt-6 p-6">
          <ZoneChart data={data} />
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded-full" style={{ background: "var(--color-primary)" }} />
              just right
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded-full" style={{ background: "var(--color-secondary)" }} />
              too easy
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded-full" style={{ background: "var(--color-tertiary)" }} />
              too hard
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rotate-45 border border-on-surface" style={{ background: "var(--color-primary)" }} />
              composite route
            </span>
            <span className="ml-auto">click a point to open the hike</span>
          </div>
        </Card>
      )}
      {data && (
        <p className="mt-4 max-w-3xl text-sm text-on-surface-variant">{data.zone.note}</p>
      )}
    </div>
  );
}
