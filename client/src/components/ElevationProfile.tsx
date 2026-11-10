import type { ProfilePoint, Section } from "../lib/types";

const W = 880;
const H = 280;
const ML = 52;
const MR = 16;
const MT = 16;
const MB = 30;

export default function ElevationProfile({
  profile,
  sections,
}: {
  profile: ProfilePoint[];
  sections: Section[];
}) {
  if (!profile.length) return null;

  const kmMax = profile[profile.length - 1].km || 1;
  const elevs = profile.map((p) => p.elev);
  const eMin = Math.max(0, Math.min(...elevs) - 100);
  const eMax = Math.max(...elevs) + 100;
  const x = (km: number) => ML + (km / kmMax) * (W - ML - MR);
  const y = (e: number) => H - MB - ((e - eMin) / (eMax - eMin)) * (H - MT - MB);

  const line = profile.map((p, i) => `${i ? "L" : "M"}${x(p.km).toFixed(1)},${y(p.elev).toFixed(1)}`).join(" ");
  const area = `${line} L${x(kmMax).toFixed(1)},${y(eMin).toFixed(1)} L${x(0).toFixed(1)},${y(eMin).toFixed(1)} Z`;

  const elevAt = (km: number) =>
    profile.reduce((best, p) => (Math.abs(p.km - km) < Math.abs(best.km - km) ? p : best), profile[0]);

  let acc = 0;
  const ticks = sections.map((s) => {
    const at = acc + s.km / 2;
    acc += s.km;
    return { at, s };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      {[0, 0.25, 0.5, 0.75, 1].map((t) => {
        const e = Math.round((eMin + (eMax - eMin) * t) / 50) * 50;
        return (
          <g key={t}>
            <line x1={ML} y1={y(e)} x2={W - MR} y2={y(e)} className="stroke-outline-variant" />
            <text x={ML - 6} y={y(e) + 3} textAnchor="end" className="fill-on-surface-variant text-[10px]">
              {e.toLocaleString()}
            </text>
          </g>
        );
      })}
      <path d={area} className="fill-primary/15" />
      <path d={line} fill="none" className="stroke-primary" strokeWidth={2.5} strokeLinejoin="round" />
      {ticks.map(({ at, s }) => {
        const p = elevAt(at);
        return (
          <g key={s.id}>
            <line
              x1={x(at)}
              y1={y(p.elev)}
              x2={x(at)}
              y2={H - MB}
              className="stroke-outline"
              strokeDasharray="2 3"
            />
            <circle cx={x(at)} cy={y(p.elev)} r={3} className="fill-primary" />
            <text x={x(at)} y={H - MB + 15} textAnchor="middle" className="fill-on-surface-variant text-[10px]">
              D{s.day}
            </text>
          </g>
        );
      })}
      <text x={ML - 6} y={12} textAnchor="end" className="fill-on-surface-variant text-[10px]">
        m
      </text>
    </svg>
  );
}
