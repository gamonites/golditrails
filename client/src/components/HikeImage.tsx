import { useEffect, useState } from "react";

export interface PhotoCredit {
  file: string;
  artist: string;
  license: string;
  source: string;
  provider: string;
  url: string;
  safeForPublic?: boolean;
}

type Manifest = Record<string, { photos: PhotoCredit[] }>;

let manifestCache: Promise<Manifest> | null = null;
export function getManifest(): Promise<Manifest> {
  if (!manifestCache) {
    manifestCache = fetch("/hikes-photos.json")
      .then((r) => (r.ok ? (r.json() as Promise<Manifest>) : ({} as Manifest)))
      .catch(() => ({} as Manifest));
  }
  return manifestCache;
}

export default function HikeImage({
  slug,
  alt,
  className = "",
}: {
  slug: string;
  alt: string;
  className?: string;
}) {
  const [file, setFile] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let live = true;
    setFile(null);
    setFailed(false);
    getManifest().then((m) => {
      if (!live) return;
      const first = m[slug]?.photos?.[0];
      setFile(first ? first.file : "none");
    });
    return () => {
      live = false;
    };
  }, [slug]);

  if (file === null) return <div className={`animate-pulse bg-surface-low ${className}`} />;
  if (file === "none" || failed)
    return <div className={`bg-gradient-to-br from-primary-container to-surface-low ${className}`} />;
  return (
    <img
      src={`/hikes/${file}`}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
