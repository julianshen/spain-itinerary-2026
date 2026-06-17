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
  { id: "itinerary", label: "行程" },
  { id: "attractions", label: "景點" },
  { id: "hotels", label: "住宿" },
  { id: "map", label: "地圖" },
  { id: "videos", label: "影片" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
          scrolled ? "nav-glass shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-[#ff385c]">
            🇪🇸 Spain 2026
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-stone-100 text-[#222222]"
                    : scrolled
                    ? "text-stone-600 hover:text-[#222222] hover:bg-stone-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#222222] hover:bg-stone-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
            <div className="px-5 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenu(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-rose-50 text-rose-600"
                      : "text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* Itinerary */}
        <ItinerarySection />

        {/* Attractions */}
        <AttractionsSection />

        {/* Hotels */}
        <HotelsSection />

        {/* Map */}
        <MapSection />

        {/* Videos */}
        <VideoSection />

        {/* Checklist */}
        <section className="py-20 md:py-28 px-5 md:px-8 section-alt">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full tracking-wider uppercase">
              Checklist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mt-4 mb-10 tracking-tight">
              行前待辦清單
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { emoji: "🏛️", text: "Alhambra 門票 — 提前 2 個月預約！" },
                { emoji: "⛪", text: "聖家堂門票 — 提前 2-3 週" },
                { emoji: "🚄", text: "AVE 高鐵早鳥票 — 可省 50%" },
                { emoji: "🏰", text: "Sevilla Alcázar 門票 — 排隊很長" },
                { emoji: "🎨", text: "普拉多美術館 / 皇宮門票" },
                { emoji: "🏨", text: "全部飯店訂房 — 尤其 Parador！" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card-airbnb px-5 py-4 flex items-center gap-4"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-sm text-[#222222] font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-5 border-t border-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl mb-4">🇪🇸</p>
          <p className="text-stone-500 text-sm">
            西班牙 11 天行程規劃 · 2026 年 10 月 22 日 → 11 月 1 日
          </p>
          <p className="text-stone-400 text-xs mt-2">
            Made with ❤️ for Julian
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm">
            <a
              href="https://www.renfe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-lg border border-stone-200 transition-all"
            >
              🚄 Renfe 高鐵
            </a>
            <a
              href="https://tickets.alhambra-patronato.es/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-lg border border-stone-200 transition-all"
            >
              🏛️ Alhambra 門票
            </a>
            <a
              href="https://sagradafamilia.org/en/tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-lg border border-stone-200 transition-all"
            >
              ⛪ 聖家堂門票
            </a>
            <a
              href="https://www.vueling.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-lg border border-stone-200 transition-all"
            >
              ✈️ Vueling 航空
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
