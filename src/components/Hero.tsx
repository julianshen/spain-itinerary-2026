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
    { name: "馬德里", emoji: "👑" },
    { name: "哥多華", emoji: "🕌" },
    { name: "塞維亞", emoji: "💃" },
    { name: "格拉納達", emoji: "🏰" },
    { name: "巴塞隆納", emoji: "🎨" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Hero image using img tag - always visible */}
      <img
        src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=85"
        alt="西班牙 Granada Alhambra"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm mb-8 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Julian 的西班牙之旅 · 2026 年 10 月
        </div>

        {/* Headline */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          西班牙·11 天
        </h1>
        <p className={`text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Madrid · Córdoba · Sevilla · Granada · Barcelona
        </p>

        {/* City pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {cities.map((city) => (
            <span key={city.name} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm hover:bg-white/20 transition-all">
              {city.emoji} {city.name}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#itinerary"
            className="px-8 py-3.5 rounded-lg bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-all shadow-lg shadow-black/10"
          >
            探索完整行程 →
          </a>
          <a
            href="#map"
            className="px-8 py-3.5 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all"
          >
            🗺️ 路線地圖
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
          <svg className="w-4 h-4 text-white/40 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
