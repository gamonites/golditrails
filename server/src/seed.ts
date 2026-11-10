import knex from "./db";
import { createSchema } from "./schema";
import type { HikeSpec, SectionSpec } from "./data/types";
import { realHikes } from "./data/real";
import { compositeHikes } from "./data/composites";

async function insertHike(h: HikeSpec) {
  let totalKm = 0;
  let totalAscent = 0;
  let totalDescent = 0;
  let maxElev = 0;
  let elev = h.startElev;
  const minElevs: number[] = [h.startElev];

  const sectionRows = h.sections.map((s, i) => {
    totalKm += s.km;
    totalAscent += s.up;
    totalDescent += s.down;
    maxElev = Math.max(maxElev, s.max);
    const startElev = elev;
    const endElev = startElev + s.up - s.down;
    minElevs.push(startElev, endElev, s.max);
    elev = endElev;
    return {
      hike_id: null as number,
      day: s.day,
      name: s.name,
      from_place: s.from,
      to_place: s.to,
      km: s.km,
      ascent: s.up,
      descent: s.down,
      max_elev: s.max,
      start_elev: startElev,
      end_elev: endElev,
      stay: s.stay ?? null,
      source_trail: s.src,
      source_detail: s.srcDetail ?? null,
      is_bypass: !!s.bypass,
      exposure: s.expo ?? null,
      notes: s.note ?? null,
      waypoints: JSON.stringify(s.wp),
      sort_order: i,
    };
  });

  const [hikeId] = await knex("hikes").insert({
    slug: h.slug,
    name: h.name,
    tagline: h.tagline,
    category: h.category,
    is_composite: !!h.composite,
    zone_note: h.zoneNote ?? null,
    country: h.country,
    region: h.region ?? null,
    total_km: Math.round(totalKm * 10) / 10,
    days: h.paceDays ?? h.sections.length,
    total_ascent: totalAscent,
    total_descent: totalDescent,
    max_elevation: maxElev,
    min_elevation: Math.min(...minElevs),
    avg_daily_ascent: Math.round(totalAscent / (h.paceDays ?? h.sections.length)),
    highest_point: h.highestPoint ?? null,
    exposure: h.exposure,
    food_lodging: h.food,
    season: h.season,
    description: h.description,
    sources: JSON.stringify(h.sources),
    featured: !!h.featured,
  });

  const realId = (hikeId as { toNumber: () => number }).toNumber?.() ?? (hikeId as unknown as number);
  await knex("hike_sections").insert(sectionRows.map((r) => ({ ...r, hike_id: realId })));
}

export async function seed() {
  await createSchema();
  await knex("hike_sections").del();
  await knex("hikes").del();
  await knex("user_hikes").del();
  await knex.raw("DELETE FROM sqlite_sequence WHERE name IN ('hikes', 'hike_sections', 'user_hikes')");
  const all: HikeSpec[] = [...compositeHikes, ...realHikes];
  for (const h of all) {
    await insertHike(h);
  }
  const count = await knex("hikes").count<{ c: number }>("id as c").first();
  const secCount = await knex("hike_sections").count<{ c: number }>("id as c").first();
  console.log(`Seeded ${count?.c} hikes, ${secCount?.c} sections into ${process.cwd()}/data/golditrails.db`);
  await knex.destroy();
}

if (import.meta.main) {
  seed().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
