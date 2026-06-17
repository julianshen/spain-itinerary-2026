"use client";

import { useEffect } from "react";
import { CITY_INFO } from "../data";
import L from "leaflet";

export default function MapSection() {
  useEffect(() => {
    // Fix default marker icons
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    const map = L.map("route-map", {
      center: [39.0, -3.5],
      zoom: 6.5,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    // Route polyline
    const coords: [number, number][] = CITY_INFO.map((c) => c.coords);
    L.polyline(coords, {
      color: "#d97706",
      weight: 3,
      opacity: 0.7,
      dashArray: "8, 12",
    }).addTo(map);

    // Markers
    CITY_INFO.forEach((city) => {
      const marker = L.marker(city.coords).addTo(map);
      marker.bindPopup(
        `<div style="text-align:center;font-family:system-ui,sans-serif">
          <div style="font-size:24px">${city.emoji}</div>
          <strong style="font-size:14px">${city.name}</strong><br/>
          <span style="font-size:12px;color:#888">${city.desc}</span>
        </div>`,
        { className: "custom-popup", closeButton: true }
      );
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section id="map" className="py-24 px-6 bg-stone-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-amber-500 text-sm tracking-widest mb-3">ROUTE</p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-100 mb-4">
            🗺️ 路線地圖
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            從馬德里出發，一路向南到安達魯西亞，再飛回巴塞隆納
          </p>
        </div>

        <div className="glass rounded-2xl overflow-hidden" style={{ height: "500px" }}>
          <div id="route-map" className="w-full h-full" />
        </div>

        {/* City steps */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {CITY_INFO.map((city, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-stone-800/60 rounded-full">
              <span className="text-lg">{city.emoji}</span>
              <span className="text-sm text-stone-300">{city.name}</span>
              <span className="text-xs text-stone-500">{city.desc}</span>
              {i < CITY_INFO.length - 1 && (
                <span className="text-amber-500/50 ml-1">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
