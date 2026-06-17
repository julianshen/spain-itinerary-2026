"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ItinerarySection from "@/components/ItinerarySection";
import AttractionsSection from "@/components/AttractionsSection";
import HotelsSection from "@/components/HotelsSection";
import VideoSection from "@/components/VideoSection";

const MapSection = dynamic(() => import("@/components/MapSection"), { ssr: false });

const NAV_ITEMS = [
  { id: "itinerary", label: "行程", emoji: "📋" },
  { id: "attractions", label: "景點", emoji: "🔥" },
  { id: "hotels", label: "住宿", emoji: "🏨" },
  { id: "map", label: "地圖", emoji: "🗺️" },
  { id: "videos", label: "影片", emoji: "🎬" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Detect active section
      const sections = ["hero", ...NAV_ITEMS.map((n) => n.id)];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-stone-950/90 backdrop-blur-lg border-b border-stone-800/50 shadow-lg shadow-stone-950/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold gradient-text">
            🇪🇸 Spain 2026
          </a>
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-amber-600/20 text-amber-400"
                    : "text-stone-400 hover:text-stone-200 hover:bg-stone-800/50"
                }`}
              >
                {item.emoji} {item.label}
              </a>
            ))}
          </div>

          {/* Mobile nav dots */}
          <div className="md:hidden flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  activeSection === item.id ? "bg-amber-500 w-4" : "bg-stone-600"
                }`}
              />
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* Itinerary */}
        <ItinerarySection />

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-t border-stone-800/50" />
        </div>

        {/* Attractions */}
        <AttractionsSection />

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-t border-stone-800/50" />
        </div>

        {/* Hotels */}
        <HotelsSection />

        {/* Map */}
        <MapSection />

        {/* Videos */}
        <VideoSection />

        {/* Quick Checklist */}
        <section className="py-24 px-6 bg-stone-900/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-8">
              ✅ 行前待辦清單
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { emoji: "🏛️", text: "Alhambra 門票（提前 2 個月）" },
                { emoji: "⛪", text: "聖家堂門票（提前預約）" },
                { emoji: "🚄", text: "AVE 高鐵早鳥票（省 50%）" },
                { emoji: "🏰", text: "Sevilla Alcázar 門票" },
                { emoji: "🎨", text: "普拉多美術館 / 皇宮門票" },
                { emoji: "🏨", text: "全部飯店訂房（尤其 Parador！）" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-sm text-stone-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl mb-2">🇪🇸</p>
          <p className="text-stone-500 text-sm">
            西班牙 11 天行程規劃 · 2026 年 10 月 22 日 → 11 月 1 日
          </p>
          <p className="text-stone-600 text-xs mt-2">
            Made with ❤️ for Julian
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs text-stone-600">
            <a href="https://www.renfe.com/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400">🚄 Renfe 高鐵</a>
            <a href="https://tickets.alhambra-patronato.es/en/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400">🏛️ Alhambra 門票</a>
            <a href="https://sagradafamilia.org/en/tickets" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400">⛪ 聖家堂門票</a>
            <a href="https://www.vueling.com/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400">✈️ Vueling 航空</a>
          </div>
        </div>
      </footer>
    </>
  );
}
