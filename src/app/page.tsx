"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import ItinerarySection from "@/components/ItinerarySection";
import AttractionsSection from "@/components/AttractionsSection";
import HotelsSection from "@/components/HotelsSection";
import VideoSection from "@/components/VideoSection";
import FullBleedDivider from "@/components/FullBleedDivider";

const MapSection = dynamic(() => import("@/components/MapSection"), { ssr: false });

import dynamic from "next/dynamic";

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
          <a href="#" className="text-base font-bold tracking-tight text-[#b8954e]">
            Spain 2026
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-[#faf6ee] text-[#1a1a1a]"
                    : scrolled
                    ? "text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#f8f7f5]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1a1a1a] hover:bg-[#f8f7f5]" : "text-white hover:bg-white/10"
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
          <div className="md:hidden bg-white border-t border-[#e5e5e5] shadow-lg">
            <div className="px-5 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenu(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-[#faf6ee] text-[#b8954e]"
                      : "text-[#6b6b6b] hover:bg-[#f8f7f5]"
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

        {/* Full-bleed divider 1: Alhambra */}
        <FullBleedDivider
          image="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=85"
          alt="Alhambra 格拉納達"
          caption="格拉納達 · 摩爾王朝的最後詩篇"
        />

        {/* Attractions */}
        <AttractionsSection />

        {/* Full-bleed divider 2: Sevilla */}
        <FullBleedDivider
          image="https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=1920&q=85"
          alt="Sevilla 塞維亞"
          caption="塞維亞 · 安達魯西亞的靈魂"
        />

        {/* Hotels */}
        <HotelsSection />

        {/* Full-bleed divider 3: Barcelona */}
        <FullBleedDivider
          image="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=85"
          alt="Barcelona 巴塞隆納"
          caption="巴塞隆納 · 高第的未竟之夢"
        />

        {/* Map */}
        <MapSection />

        {/* Videos */}
        <VideoSection />

        {/* Checklist - Ink section */}
        <section className="py-20 md:py-28 px-5 md:px-8 section-ink">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag-gold mb-4 inline-block">
              Checklist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-10 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              行前待辦清單
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { text: "Alhambra 門票 — 提前 2 個月預約！" },
                { text: "聖家堂門票 — 提前 2-3 週" },
                { text: "AVE 高鐵早鳥票 — 可省 50%" },
                { text: "Sevilla Alcázar 門票 — 排隊很長" },
                { text: "普拉多美術館 / 皇宮門票" },
                { text: "全部飯店訂房 — 尤其 Parador！" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="checklist-item"
                >
                  <div className="check-icon" />
                  <span className="text-sm text-white/80 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-5 border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-500 text-sm">
            西班牙 11 天行程規劃 · 2026 年 10 月 22 日 → 11 月 1 日
          </p>
          <p className="text-stone-400 text-xs mt-2">
            Made with care for Julian
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm">
            <a
              href="https://www.renfe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#f8f7f5] hover:bg-[#f0eeeb] text-[#6b6b6b] rounded-lg border border-[#e5e5e5] transition-all inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Renfe 高鐵
            </a>
            <a
              href="https://tickets.alhambra-patronato.es/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#f8f7f5] hover:bg-[#f0eeeb] text-[#6b6b6b] rounded-lg border border-[#e5e5e5] transition-all inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
              </svg>
              Alhambra 門票
            </a>
            <a
              href="https://sagradafamilia.org/en/tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#f8f7f5] hover:bg-[#f0eeeb] text-[#6b6b6b] rounded-lg border border-[#e5e5e5] transition-all inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m-6-6l6-6 6 6M5 21h14" />
              </svg>
              聖家堂門票
            </a>
            <a
              href="https://www.vueling.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#f8f7f5] hover:bg-[#f0eeeb] text-[#6b6b6b] rounded-lg border border-[#e5e5e5] transition-all inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Vueling 航空
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
