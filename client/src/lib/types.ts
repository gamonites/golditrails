export type Category = "too_cool" | "just_right" | "too_hot";

export interface Hike {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  isComposite: boolean;
  zoneNote: string | null;
  country: string;
  region: string | null;
  totalKm: number;
  days: number;
  totalAscent: number;
  totalDescent: number;
  maxElevation: number;
  minElevation: number;
  avgDailyAscent: number;
  highestPoint: string | null;
  featured: boolean;
}

export interface Section {
  id: number;
  day: number;
  name: string;
  fromPlace: string;
  toPlace: string;
  km: number;
  ascent: number;
  descent: number;
  maxElev: number;
  startElev: number;
  endElev: number;
  stay: string | null;
  sourceTrail: string | null;
  sourceDetail: string | null;
  isBypass: boolean;
  exposure: string | null;
  notes: string | null;
  waypoints: [number, number][] | null;
}

export interface ProfilePoint {
  km: number;
  elev: number;
}

export interface CompositionEntry {
  day: number;
  name: string;
  sourceTrail: string | null;
  sourceDetail: string | null;
  isBypass: boolean;
}

export type LogisticsCategory = "transport" | "permit" | "lodging" | "booking" | "food" | "info";

export interface LogisticsItem {
  title: string;
  category: LogisticsCategory;
  required: boolean;
  when: string;
  where: string;
  url: string | null;
  notes: string;
}

export interface HikeLogistics {
  slug: string;
  getIn: string;
  getOut: string;
  items: LogisticsItem[];
}

export interface VibesTown {
  name: string;
  vibe: string;
  highlights: string[];
}

export interface VibesPhoto {
  file: string;
  artist: string | null;
  license: string;
  source: string;
  url: string;
  provider: string;
  safeForPublic: boolean;
}

export interface HikeVibes {
  slug: string;
  vibe: string;
  towns: VibesTown[];
  photos: VibesPhoto[];
}

export interface ParkingEntry {
  title: string;
  where: string;
  url: string | null;
  notes: string;
}

export interface StageCamping {
  day: number;
  camping: string;
  campingUrl: string | null;
  wild: "allowed" | "tolerated" | "not allowed";
  notes: string;
}

export interface HikeCamping {
  slug: string;
  parking: ParkingEntry[];
  wildCampingRule: string;
  stages: StageCamping[];
}

export interface HikeDetailData {
  hike: Hike & {
    exposure: string | null;
    foodLodging: string | null;
    season: string | null;
    description: string | null;
    sources: string[];
    logistics: HikeLogistics | null;
    vibes: HikeVibes | null;
    camping: HikeCamping | null;
  };
  sections: Section[];
  profile: ProfilePoint[];
  composition: CompositionEntry[] | null;
}

export interface ZoneData {
  zone: { dailyGain: [number, number]; maxElevation: number; note: string };
  points: {
    slug: string;
    name: string;
    category: Category;
    isComposite: boolean;
    dailyGain: number;
    maxElevation: number;
  }[];
}

export interface User {
  id: number;
  username: string;
  email: string | null;
}

export interface FavoriteRow {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  is_composite: number;
  country: string;
  total_km: number;
  days: number;
  avg_daily_ascent: number;
  max_elevation: number;
  created_at: string;
}
