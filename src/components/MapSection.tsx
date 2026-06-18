"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface CityInfo {
  name: string;
  coords: [number, number];
  emoji: string;
  desc: string;
}

interface MapSectionProps {
  cityInfo: CityInfo[];
  title?: string;
  subtitle?: string;
}

export default function MapSection({
  cityInfo,
  title = "路線地圖",
  subtitle = "從馬德里一路向南，再到巴塞隆納",
}: MapSectionProps) {
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

    const coords: [number, number][] = cityInfo.map((c) => c.coords);
    L.polyline(coords, {
      color: "#b8954e",
      weight: 3,
      opacity: 0.7,
      dashArray: "8, 12",
    }).addTo(map);

    cityInfo.forEach((city) => {
      const marker = L.marker(city.coords).addTo(map);
      marker.bindPopup(
        `<div style="text-align:center;font-family:system-ui,sans-serif;padding:4px 8px">
          <strong style="font-size:14px;color:#1a1a1a">${city.name}</strong><br/>
          <span style="font-size:12px;color:#6b6b6b">${city.desc}</span>
        </div>`,
        { className: "custom-popup", closeButton: true, maxWidth: 200 }
      );
    });

    return () => {
      map.remove();
    };
  }, [cityInfo]);

  return (
    <section id="map" className="py-20 md:py-28 px-5 md:px-8 section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="tag-gold mb-4 inline-block">Route Map</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mt-4 mb-4 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {title}
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#6b6b6b] max-w-lg mx-auto text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="card-editorial overflow-hidden">
          <div id="route-map" style={{ height: "480px", width: "100%" }} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {cityInfo.map((city, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#e5e5e5]">
                <span className="text-sm font-medium text-[#1a1a1a]">{city.name}</span>
                <span className="text-xs text-[#9a9a9a]">{city.desc}</span>
              </div>
              {i < cityInfo.length - 1 && (
                <span className="text-[#b8954e] mx-1 text-lg">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
