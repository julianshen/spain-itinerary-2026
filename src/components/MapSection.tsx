"use client";

import { useEffect } from "react";
import { CITY_INFO } from "../data";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapSection() {
  useEffect(() => {
    const mapEl = document.getElementById("route-map");
    if (!mapEl) return;

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

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    const coords: [number, number][] = CITY_INFO.map((c) => c.coords);
    L.polyline(coords, {
      color: "#ff385c",
      weight: 3,
      opacity: 0.6,
      dashArray: "8, 12",
    }).addTo(map);

    CITY_INFO.forEach((city) => {
      const marker = L.marker(city.coords).addTo(map);
      marker.bindPopup(
        `<div style="text-align:center;font-family:system-ui,sans-serif;padding:4px 8px">
          <div style="font-size:28px;margin-bottom:4px">${city.emoji}</div>
          <strong style="font-size:14px;color:#222">${city.name}</strong><br/>
          <span style="font-size:12px;color:#6a6a6a">${city.desc}</span>
        </div>`,
        { className: "custom-popup", closeButton: true, maxWidth: 200 }
      );
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section id="map" className="py-20 md:py-28 px-5 md:px-8 section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full tracking-wider uppercase">
            Route Map
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mt-4 mb-4 tracking-tight">
            路線地圖
          </h2>
          <p className="text-[#6a6a6a] max-w-lg mx-auto text-lg">
            從馬德里一路向南，再到巴塞隆納
          </p>
        </div>

        <div className="card-airbnb overflow-hidden">
          <div id="route-map" style={{ height: "480px", width: "100%" }} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CITY_INFO.map((city, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-stone-100">
                <span className="text-lg">{city.emoji}</span>
                <span className="text-sm font-medium text-[#222222]">{city.name}</span>
                <span className="text-xs text-stone-400">{city.desc}</span>
              </div>
              {i < CITY_INFO.length - 1 && (
                <span className="text-rose-300 mx-1 text-lg">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
