import { useNavigate } from "react-router-dom";
import type { ZoneData } from "../lib/types";

const W = 880;
const H = 500;
const ML = 56;
const MR = 24;
const MT = 24;
const MB = 48;
const X_MAX = 3200;
const Y_MAX = 1400;

export default function ZoneChart({ data }: { data: ZoneData }) {
  const navigate = useNavigate();
  const x = (v: number) => ML + (v / X_MAX) * (W - ML - MR);
  const y = (v: number) => H - MB - (v / Y_MAX) * (H - MT - MB);
  const [z0, z1] = data.zone.dailyGain;

  const colorFor = (c: string) =>
    c === "just_right" ? "var(--color-primary)" : c === "too_cool" ? "var(--color-secondary)" : "var(--color-tertiary)";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      <rect
        x={x(0)}
        y={y(z1)}
        width={x(data.zone.maxElevation) - x(0)}
        height={y(z0) - y(z1)}
        className="fill-primary/10"
      />
      <rect
        x={x(0)}
        y={y(z1)}
        width={x(data.zone.maxElevation) - x(0)}
        height={y(z0) - y(z1)}
        fill="none"
        className="stroke-primary/40"
        strokeDasharray="6 4"
      />
      <text x={x(60)} y={y(z1) - 10} className="fill-primary text-[11px] font-semibold">
        the Goldilocks zone: +{z0}…{z1} m/day, below {data.zone.maxElevation.toLocaleString()} m
      </text>

      {[0, 500, 1000, 1500, 2000, 2500, 3000].map((v) => (
        <g key={`x${v}`}>
          <line x1={x(v)} y1={y(0)} x2={x(v)} y2={y(Y_MAX)} className="stroke-outline-variant" />
          <text x={x(v)} y={H - MB + 16} textAnchor="middle" className="fill-on-surface-variant text-[10px]">
            {v.toLocaleString()}
          </text>
        </g>
      ))}
      {[0, 200, 400, 600, 800, 1000, 1200, 1400].map((v) => (
        <g key={`y${v}`}>
          <line x1={x(0)} y1={y(v)} x2={x(X_MAX)} y2={y(v)} className="stroke-outline-variant" />
          <text x={ML - 8} y={y(v) + 3} textAnchor="end" className="fill-on-surface-variant text-[10px]">
            {v}
          </text>
        </g>
      ))}
      <text x={(ML + W - MR) / 2} y={H - 6} textAnchor="middle" className="fill-on-surface-variant text-[11px] font-medium">
        highest point / max elevation (m)
      </text>
      <text
        x={14}
        y={(MT + H - MB) / 2}
        textAnchor="middle"
        transform={`rotate(-90 14 ${(MT + H - MB) / 2})`}
        className="fill-on-surface-variant text-[11px] font-medium"
      >
        climbing per day (m)
      </text>

      {data.points.map((p, i) => {
        const nudge = i % 2 === 0 ? -8 : 12;
        return (
          <g key={p.slug} className="cursor-pointer" onClick={() => navigate(`/hikes/${p.slug}`)}>
            {p.isComposite ? (
              <rect
                x={x(p.maxElevation) - 6}
                y={y(p.dailyGain) + nudge * 0.4 - 6}
                width={12}
                height={12}
                transform={`rotate(45 ${x(p.maxElevation)} ${y(p.dailyGain) + nudge * 0.4})`}
                fill={colorFor(p.category)}
                fillOpacity={0.9}
                stroke="var(--color-on-surface)"
                strokeWidth={1.5}
              />
            ) : (
              <circle
                cx={x(p.maxElevation)}
                cy={y(p.dailyGain) + nudge * 0.4}
                r={6}
                fill={colorFor(p.category)}
                fillOpacity={0.85}
              />
            )}
            <text x={x(p.maxElevation) + 10} y={y(p.dailyGain) + nudge} className="fill-on-surface-variant text-[10px]">
              {p.name}
              {p.isComposite ? " ◆" : ""}
            </text>
            <title>{`${p.name} — +${p.dailyGain} m/day, max ${p.maxElevation} m`}</title>
          </g>
        );
      })}
    </svg>
  );
}
