import type { Section } from "../lib/types";
import { Badge } from "./ui";

export default function DayTable({ sections }: { sections: Section[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-sm">
        <thead>
          <tr className="border-b border-outline text-left text-xs uppercase tracking-wide text-on-surface-variant">
            <th className="py-2 pr-3">Day</th>
            <th className="py-2 pr-3">Stage</th>
            <th className="py-2 pr-3 text-right">km</th>
            <th className="py-2 pr-3 text-right">up</th>
            <th className="py-2 pr-3 text-right">down</th>
            <th className="py-2 pr-3 text-right">high</th>
            <th className="py-2">stay</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((s) => (
            <tr key={s.id} className="border-b border-outline-variant align-top">
              <td className="py-2 pr-3 font-semibold">{s.day}</td>
              <td className="py-2 pr-3">
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-on-surface-variant">
                  {s.fromPlace} → {s.toPlace}
                </div>
                {s.exposure && <div className="text-xs text-tertiary">{s.exposure}</div>}
                {s.isBypass && (
                  <Badge tone="composite" className="mt-1">
                    bypass
                  </Badge>
                )}
                {s.notes && <div className="mt-1 text-xs text-on-surface-variant">{s.notes}</div>}
              </td>
              <td className="py-2 pr-3 text-right tabular-nums">{s.km}</td>
              <td className="py-2 pr-3 text-right tabular-nums">+{s.ascent.toLocaleString()}</td>
              <td className="py-2 pr-3 text-right tabular-nums">−{s.descent.toLocaleString()}</td>
              <td className="py-2 pr-3 text-right tabular-nums">{s.maxElev.toLocaleString()} m</td>
              <td className="py-2 text-on-surface-variant">{s.stay ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
