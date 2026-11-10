import { useEffect } from "react";
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from "react-leaflet";
import { latLngBounds } from "leaflet";
import type { Section } from "../lib/types";

const COLORS = ["#2f6b4f", "#a06b1f", "#a8503c", "#4a6fa5", "#7d5ba6", "#2f8f83"];

function FitBounds({ sections }: { sections: Section[] }) {
  const map = useMap();
  useEffect(() => {
    const pts = sections.flatMap((s) => s.waypoints ?? []);
    if (pts.length) map.fitBounds(latLngBounds(pts), { padding: [28, 28] });
  }, [map, sections]);
  return null;
}

export default function TrailMap({ sections }: { sections: Section[] }) {
  const withWp = sections.filter((s) => s.waypoints && s.waypoints.length > 0);
  if (!withWp.length) {
    return <p className="text-sm text-on-surface-variant">No map waypoints for this hike yet.</p>;
  }

  return (
    <div className="h-[440px] w-full overflow-hidden rounded-xl border border-outline">
      <MapContainer center={withWp[0].waypoints![0]} zoom={5} className="h-full w-full" scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          maxZoom={16}
        />
        {withWp.map((s, i) => (
          <Polyline
            key={s.id}
            positions={s.waypoints!}
            pathOptions={{
              color: COLORS[i % COLORS.length],
              weight: s.isBypass ? 2.5 : 4,
              dashArray: s.isBypass ? "6 6" : undefined,
              opacity: 0.85,
            }}
          >
            <Tooltip sticky>
              Day {s.day} — {s.name}
              {s.isBypass ? " (bypass)" : ""}
            </Tooltip>
          </Polyline>
        ))}
        {withWp.map((s, i) => (
          <CircleMarker
            key={`start-${s.id}`}
            center={s.waypoints![0]}
            radius={7}
            pathOptions={{
              color: "#ffffff",
              weight: 1.5,
              fillColor: COLORS[i % COLORS.length],
              fillOpacity: 1,
            }}
          >
            <Tooltip>
              Day {s.day} · {s.fromPlace} → {s.toPlace}
            </Tooltip>
          </CircleMarker>
        ))}
        <FitBounds sections={withWp} />
      </MapContainer>
    </div>
  );
}
