"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cities = [
    { name: "馬德里", label: "Madrid" },
    { name: "哥多華", label: "Córdoba" },
    { name: "塞維亞", label: "Sevilla" },
    { name: "格拉納達", label: "Granada" },
    { name: "巴塞隆納", label: "Barcelona" },
  ];

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-[#1a1a1a]">
      {/* Left: Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center px-8 md:px-16 py-24">
        <div className="max-w-xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8954e] animate-pulse" />
            Julian 的西班牙之旅 · 2026 年 10 月
          </div>

          {/* Headline */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-3 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            西班牙
          </h1>
          <p
            className={`text-3xl md:text-4xl font-light text-[#b8954e] mb-8 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            十一日巡禮
          </p>

          <p
            className={`text-base md:text-lg text-white/50 leading-relaxed mb-10 max-w-md transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            從馬德里啟程，穿越安達魯西亞的陽光與摩爾遺跡，最終抵達高第的巴塞隆納。五座城市，一段史詩。
          </p>

          {/* City list */}
          <div
            className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {cities.map((city) => (
              <span
                key={city.name}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                <span className="text-[#b8954e] mr-1.5">·</span>
                {city.name}
                <span className="text-white/30 ml-1.5 text-xs">{city.label}</span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a href="#itinerary" className="btn-primary inline-flex items-center gap-2">
              探索完整行程
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#map" className="btn-ghost inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7" />
              </svg>
              路線地圖
            </a>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=85"
          alt="西班牙 Granada Alhambra"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent" />
        <div className="absolute inset-0 film-grain" />
      </div>

      {/* Mobile image (background) */}
      <div className="lg:hidden absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=85"
          alt="西班牙 Granada Alhambra"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]" />
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-1/4 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/30 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
