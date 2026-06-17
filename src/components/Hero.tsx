"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=85)`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-amber-500 tracking-widest text-sm md:text-base font-medium mb-4 animate-fade-in-up">
          JULIAN — 2026 年 10 月
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="gradient-text">西班牙·11 天</span>
          <br />
          <span className="text-stone-100 text-3xl md:text-5xl lg:text-6xl">
            從馬德里到巴塞隆納
          </span>
        </h1>
        <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
          🏙️ Madrid · 🕌 Córdoba · 💃 Sevilla · 🏰 Granada · 🎨 Barcelona
        </p>
        <div className="flex gap-4 justify-center animate-fade-in-up animate-delay-400">
          <a
            href="#itinerary"
            className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium transition-all duration-200 shadow-lg shadow-amber-600/30"
          >
            📋 看完整行程
          </a>
          <a
            href="#map"
            className="px-8 py-3 bg-stone-800/80 hover:bg-stone-700/80 text-stone-200 rounded-full font-medium border border-stone-700 transition-all duration-200"
          >
            🗺️ 路線地圖
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
