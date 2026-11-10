import { Link } from "react-router-dom";
import type { Hike } from "../lib/types";
import { Badge, Card, categoryLabel, categoryTone } from "./ui";

export default function HikeCard({ hike }: { hike: Hike }) {
  return (
    <Link to={`/hikes/${hike.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col p-5 transition group-hover:-translate-y-0.5 group-hover:shadow-md">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold leading-snug transition group-hover:text-primary">
            {hike.name}
          </h3>
          {hike.isComposite && <Badge tone="composite">composite</Badge>}
        </div>
        <p className="mt-1 text-sm text-on-surface-variant">{hike.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          <Badge tone={categoryTone(hike.category)}>{categoryLabel(hike.category)}</Badge>
          <Badge tone="neutral">{hike.days} days</Badge>
          <Badge tone="neutral">+{hike.avgDailyAscent} m/day</Badge>
          <Badge tone="neutral">max {hike.maxElevation.toLocaleString()} m</Badge>
        </div>
        <p className="mt-auto pt-3 text-xs text-on-surface-variant">
          {hike.country}
          {hike.region ? ` · ${hike.region}` : ""}
        </p>
      </Card>
    </Link>
  );
}
