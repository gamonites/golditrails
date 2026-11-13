import { useEffect, useRef, useState } from "react";
import {
  LngLatBounds,
  Map as MapLibreMap,
  Marker,
  setWorkerUrl,
  type StyleSpecification,
} from "maplibre-gl";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Section } from "../lib/types";
import { Button } from "./ui";

// Vite fingerprints the worker as an asset; tell MapLibre where to find it.
setWorkerUrl(maplibreWorkerUrl);

const COLORS = ["#2f6b4f", "#a06b1f", "#a8503c", "#4a6fa5", "#7d5ba6", "#2f8f83"];

function buildRoute(sections: Section[]) {
  const routeFeatures = sections.map((s, i) => ({
    type: "Feature" as const,
    properties: {
      color: COLORS[i % COLORS.length],
      day: s.day,
      bypass: s.isBypass,
    },
    geometry: {
      type: "LineString" as const,
      coordinates: s.waypoints!.map(([lat, lng]) => [lng, lat]),
    },
  }));

  const stopFeatures = sections.map((s, i) => ({
    type: "Feature" as const,
    properties: { color: COLORS[i % COLORS.length] },
    geometry: {
      type: "Point" as const,
      coordinates: [s.waypoints![0][1], s.waypoints![0][0]],
    },
  }));

  return {
    route: { type: "FeatureCollection" as const, features: routeFeatures },
    stops: { type: "FeatureCollection" as const, features: stopFeatures },
  };
}

export default function Trail3D({ sections }: { sections: Section[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const resetRef = useRef<() => void>(() => {});
  const [error, setError] = useState<string | null>(null);

  const withWp = sections.filter((s) => s.waypoints && s.waypoints.length > 0);

  useEffect(() => {
    if (!containerRef.current || withWp.length === 0) return;
    setError(null);

    const { route, stops } = buildRoute(withWp);
    const style: StyleSpecification = {
      version: 8,
      sources: {
        topo: {
          type: "raster",
          tiles: [
            "https://a.tile.opentopomap.org/{z}/{x}/{y}.png",
            "https://b.tile.opentopomap.org/{z}/{x}/{y}.png",
            "https://c.tile.opentopomap.org/{z}/{x}/{y}.png",
          ],
          tileSize: 256,
          maxzoom: 17,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)',
        },
        terrain: {
          type: "raster-dem",
          tiles: ["https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"],
          encoding: "terrarium",
          tileSize: 256,
          maxzoom: 15,
          attribution: "Terrain tiles by Mapzen / AWS Open Data",
        },
        hillshade: {
          type: "raster-dem",
          tiles: ["https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"],
          encoding: "terrarium",
          tileSize: 256,
          maxzoom: 15,
        },
      },
      layers: [
        {
          id: "background",
          type: "background",
          paint: { "background-color": "#f1efe8" },
        },
        {
          id: "topo",
          type: "raster",
          source: "topo",
          paint: { "raster-opacity": 0.92 },
        },
        {
          id: "hillshade",
          type: "hillshade",
          source: "hillshade",
          paint: {
            "hillshade-exaggeration": 0.25,
            "hillshade-shadow-color": "#4a453a",
            "hillshade-highlight-color": "#fffdf4",
            "hillshade-accent-color": "#c8c2af",
          },
        },
      ],
      sky: {
        "sky-color": "#a9cdd8",
        "horizon-color": "#f2ede2",
        "fog-color": "#f2ede2",
        "fog-ground-blend": 0.7,
        "horizon-fog-blend": 0.7,
        "sky-horizon-blend": 0.7,
      },
      terrain: { source: "terrain", exaggeration: 1.35 },
    };

    let map: MapLibreMap;
    try {
      map = new MapLibreMap({
        container: containerRef.current,
        style,
        center: [7, 46],
        zoom: 6,
        pitch: 56,
        bearing: -22,
        maxPitch: 80,
        minZoom: 3,
        maxZoom: 15,
        canvasContextAttributes: { antialias: true },
        attributionControl: { compact: true },
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Your browser could not start the 3D view.");
      return;
    }

    const markers: Marker[] = [];

    map.on("load", () => {
      map.addSource("route", {
        type: "geojson",
        data: route,
      });
      map.addSource("stops", {
        type: "geojson",
        data: stops,
      });

      map.addLayer({
        id: "route-halo",
        type: "line",
        source: "route",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: {
          "line-color": "#faf9f6",
          "line-width": 9,
          "line-opacity": 0.8,
        },
      });
      map.addLayer({
        id: "route-solid",
        type: "line",
        source: "route",
        filter: ["!=", ["get", "bypass"], true],
        layout: { "line-join": "round", "line-cap": "round" },
        paint: {
          "line-color": ["get", "color"],
          "line-width": 4.5,
        },
      });
      map.addLayer({
        id: "route-bypass",
        type: "line",
        source: "route",
        filter: ["==", ["get", "bypass"], true],
        layout: { "line-join": "round", "line-cap": "round" },
        paint: {
          "line-color": ["get", "color"],
          "line-width": 3,
          "line-dasharray": [2, 2],
        },
      });
      map.addLayer({
        id: "stops",
        type: "circle",
        source: "stops",
        paint: {
          "circle-color": ["get", "color"],
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 3.5, 12, 6],
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 1.5,
        },
      });

      for (const [i, s] of withWp.entries()) {
        const el = document.createElement("div");
        el.className =
          "flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-md";
        el.style.backgroundColor = COLORS[i % COLORS.length];
        el.style.pointerEvents = "none";
        el.textContent = String(s.day);
        markers.push(
          new Marker({ element: el, anchor: "center" })
            .setLngLat([s.waypoints![0][1], s.waypoints![0][0]])
            .addTo(map),
        );
      }

      const bounds = new LngLatBounds();
      for (const s of withWp) {
        for (const [lat, lng] of s.waypoints!) bounds.extend([lng, lat]);
      }
      const fit = () => {
        const camera = map.cameraForBounds(bounds, {
          padding: { top: 64, right: 48, bottom: 110, left: 48 },
          pitch: 56,
          bearing: -22,
        });
        map.jumpTo({ ...camera, pitch: 56, bearing: -22 });
      };
      resetRef.current = fit;
      fit();
    });

    return () => {
      resetRef.current = () => {};
      for (const marker of markers) marker.remove();
      map.remove();
    };
    // The section data is fetched once per hike; rebuilding the map on every
    // render would destroy the user's camera position.
  }, [sections]);

  if (withWp.length === 0) {
    return <p className="text-sm text-on-surface-variant">No 3D waypoints for this hike yet.</p>;
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        role="region"
        aria-label="Interactive 3D terrain map of the route"
        className="h-[440px] w-full overflow-hidden rounded-xl border border-outline bg-surface-low"
      />
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-surface-low/95 p-6 text-center text-sm text-on-surface-variant">
          {error}
        </div>
      ) : (
        <>
          <Button
            variant="outline"
            className="absolute right-3 top-3 z-10 !bg-surface-high/90 backdrop-blur"
            onClick={() => resetRef.current()}
          >
            Reset view
          </Button>
          <div className="pointer-events-none absolute bottom-3 left-3 z-10 hidden rounded-full bg-surface-high/90 px-3 py-1 text-[11px] font-medium text-on-surface-variant shadow-sm backdrop-blur sm:block">
            Drag to orbit · right-drag to pan · scroll to zoom
          </div>
        </>
      )}
    </div>
  );
}
