import { Router } from "express";
import knex from "../db";
import { requireAuth } from "../passport";

const router = Router();

function buildProfile(sections: any[]): { km: number; elev: number }[] {
  const pts: { km: number; elev: number }[] = [];
  let km = 0;
  for (const s of sections) {
    const { start_elev: a, end_elev: b, max_elev: m, km: d } = s;
    const n = 14;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const base = a + (b - a) * t;
      const bump = Math.sin(Math.PI * t) * Math.max(0, m - Math.max(a, b));
      pts.push({ km: Math.round((km + d * t) * 100) / 100, elev: Math.round(base + bump) });
    }
    km += d;
  }
  return pts;
}

router.get("/", (req, res) => {
  (async () => {
    const { category } = req.query;
    let q = knex("hikes").select("*");
    if (category === "just_right" || category === "too_cool" || category === "too_hot") {
      q = q.where({ category });
    }
    const hikes = await q.orderBy("featured", "desc").orderBy("name");
    const out = hikes.map((h: any) => ({
      id: h.id,
      slug: h.slug,
      name: h.name,
      tagline: h.tagline,
      category: h.category,
      isComposite: !!h.is_composite,
      zoneNote: h.zone_note,
      country: h.country,
      region: h.region,
      totalKm: h.total_km,
      days: h.days,
      totalAscent: h.total_ascent,
      totalDescent: h.total_descent,
      maxElevation: h.max_elevation,
      minElevation: h.min_elevation,
      avgDailyAscent: h.avg_daily_ascent,
      highestPoint: h.highest_point,
      featured: !!h.featured,
    }));
    res.json({ hikes: out });
  })().catch((e) => {
    console.error(e);
    res.status(500).json({ error: "Failed to list hikes" });
  });
});

router.get("/zone", (_req, res) => {
  (async () => {
    const hikes = await knex("hikes").select("slug", "name", "category", "is_composite", "avg_daily_ascent", "max_elevation");
    res.json({
      zone: { dailyGain: [400, 950], maxElevation: 2750, note: "The Goldilocks zone: ~400-950 m of climbing per day and no pass above ~2,750 m — enough elevation to feel the workout, low enough to stand on top and breathe." },
      points: hikes.map((h: any) => ({
        slug: h.slug,
        name: h.name,
        category: h.category,
        isComposite: !!h.is_composite,
        dailyGain: h.avg_daily_ascent,
        maxElevation: h.max_elevation,
      })),
    });
  })().catch((e) => {
    console.error(e);
    res.status(500).json({ error: "Failed to load zone data" });
  });
});

router.get("/favorites", requireAuth, (req, res) => {
  (async () => {
    const rows = await knex("user_hikes as uh")
      .join("hikes as h", "h.id", "uh.hike_id")
      .where({ "uh.user_id": (req as any).user.id })
      .select("h.id", "h.slug", "h.name", "h.tagline", "h.category", "h.is_composite", "h.country", "h.total_km", "h.days", "h.avg_daily_ascent", "h.max_elevation", "uh.created_at");
    res.json({ favorites: rows });
  })().catch((e) => {
    console.error(e);
    res.status(500).json({ error: "Failed to load favorites" });
  });
});

router.get("/:slug", (req, res) => {
  (async () => {
    const hike = await knex("hikes").where({ slug: req.params.slug }).first();
    if (!hike) return res.status(404).json({ error: "Hike not found" });
    const sections = await knex("hike_sections").where({ hike_id: hike.id }).orderBy("sort_order");
    const parsed = sections.map((s: any) => ({
      id: s.id,
      day: s.day,
      name: s.name,
      fromPlace: s.from_place,
      toPlace: s.to_place,
      km: s.km,
      ascent: s.ascent,
      descent: s.descent,
      maxElev: s.max_elev,
      startElev: s.start_elev,
      endElev: s.end_elev,
      stay: s.stay,
      sourceTrail: s.source_trail,
      sourceDetail: s.source_detail,
      isBypass: !!s.is_bypass,
      exposure: s.exposure,
      notes: s.notes,
      waypoints: s.waypoints ? JSON.parse(s.waypoints) : null,
    }));
    const composition = parsed
      .map((s: any) => ({
        day: s.day,
        name: s.name,
        sourceTrail: s.sourceTrail,
        sourceDetail: s.sourceDetail,
        isBypass: s.isBypass,
      }))
      .filter((s: any) => s.sourceDetail || s.isBypass);

    res.json({
      hike: {
        id: hike.id,
        slug: hike.slug,
        name: hike.name,
        tagline: hike.tagline,
        category: hike.category,
        isComposite: !!hike.is_composite,
        zoneNote: hike.zone_note,
        country: hike.country,
        region: hike.region,
        totalKm: hike.total_km,
        days: hike.days,
        totalAscent: hike.total_ascent,
        totalDescent: hike.total_descent,
        maxElevation: hike.max_elevation,
        minElevation: hike.min_elevation,
        avgDailyAscent: hike.avg_daily_ascent,
        highestPoint: hike.highest_point,
        exposure: hike.exposure,
        foodLodging: hike.food_lodging,
        season: hike.season,
        description: hike.description,
        sources: hike.sources ? JSON.parse(hike.sources) : [],
        featured: !!hike.featured,
      },
      sections: parsed,
      profile: buildProfile(sections),
      composition: hike.is_composite ? composition : null,
    });
  })().catch((e) => {
    console.error(e);
    res.status(500).json({ error: "Failed to load hike" });
  });
});

router.post("/:id/favorite", requireAuth, (req, res) => {
  (async () => {
    const hike = await knex("hikes").where({ id: req.params.id }).first();
    if (!hike) return res.status(404).json({ error: "Hike not found" });
    await knex("user_hikes")
      .insert({ user_id: (req as any).user.id, hike_id: hike.id })
      .onConflict(["user_id", "hike_id"]).ignore();
    res.json({ ok: true, favorited: true });
  })().catch((e) => {
    console.error(e);
    res.status(500).json({ error: "Failed to favorite" });
  });
});

router.delete("/:id/favorite", requireAuth, (req, res) => {
  (async () => {
    await knex("user_hikes").where({ user_id: (req as any).user.id, hike_id: req.params.id }).del();
    res.json({ ok: true, favorited: false });
  })().catch((e) => {
    console.error(e);
    res.status(500).json({ error: "Failed to unfavorite" });
  });
});

export default router;
