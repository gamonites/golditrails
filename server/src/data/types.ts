export type Category = "just_right" | "too_cool" | "too_hot";

export interface SectionSpec {
  day: number;
  name: string;
  from: string;
  to: string;
  km: number;
  up: number;
  down: number;
  max: number;
  stay?: string;
  src: string;
  srcDetail?: string;
  bypass?: boolean;
  expo?: string;
  note?: string;
  wp: [number, number][];
}

export interface HikeSpec {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  composite?: boolean;
  paceDays?: number;
  zoneNote?: string;
  country: string;
  region?: string;
  startElev: number;
  highestPoint?: string;
  exposure: string;
  food: string;
  season: string;
  description: string;
  sources: string[];
  featured?: boolean;
  sections: SectionSpec[];
}
