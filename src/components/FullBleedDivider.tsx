"use client";

import { useEffect, useState } from "react";

interface FullBleedDividerProps {
  image: string;
  alt: string;
  caption?: string;
}

export default function FullBleedDivider({ image, alt, caption }: FullBleedDividerProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("full-bleed-observer");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = rect.top / window.innerHeight;
      setOffsetY(progress * 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="full-bleed-observer" className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      {/* Film grain */}
      <div className="absolute inset-0 film-grain opacity-30" />
      {caption && (
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <p className="text-white/90 text-base md:text-lg font-medium tracking-wide" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
