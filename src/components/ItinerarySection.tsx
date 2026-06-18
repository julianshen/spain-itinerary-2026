"use client";

import { useState } from "react";
import { DayPlan } from "../types";
import { DAYS } from "../data";

function DayCard({ day, index }: { day: DayPlan; index: number }) {
  const [expanded, setExpanded] = useState(false);

  // Map emoji to simple icon or text
  const getIcon = (emoji: string) => {
    const map: Record<string, string> = {
      "✈️": "flight",
      "🚄": "train",
      "🏛️": "landmark",
      "🕌": "mosque",
      "💃": "dance",
      "🏰": "castle",
      "🎨": "art",
      "⛪": "church",
      "🌳": "park",
      "🍷": "wine",
      "🌅": "sunset",
      "🛍️": "shopping",
    };
    return map[emoji] || "circle";
  };

  const IconSvg = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
      flight: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      train: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      ),
      landmark: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
        </svg>
      ),
      mosque: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      castle: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      art: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      church: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m-6-6l6-6 6 6M5 21h14" />
        </svg>
      ),
      park: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      wine: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      sunset: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      shopping: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      circle: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
        </svg>
      ),
    };
    return icons[type] || icons.circle;
  };

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
      <div
        className="card-editorial overflow-hidden cursor-pointer group"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header bar */}
        <div className="flex items-start gap-4 p-5">
          {/* Vertical date */}
          <div className="flex-shrink-0 w-14 flex flex-col items-center py-2">
            <span className="text-2xl font-bold text-[#1a1a1a] leading-none">{day.day}</span>
            <span className="text-[10px] text-[#9a9a9a] uppercase tracking-wider mt-1">DAY</span>
            <div className="w-px h-8 bg-[#e5e5e5] mt-2" />
            <span className="text-[10px] text-[#9a9a9a] mt-1 text-center leading-tight">{day.date}</span>
          </div>

          <div className="flex-1 min-w-0 pt-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="tag-gold">Day {day.day}</span>
              <span className="text-xs text-[#9a9a9a]">{day.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-[#1a1a1a]">{day.title}</h3>
            <p className="text-sm text-[#6b6b6b]">{day.subtitle}</p>
          </div>

          <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#9a9a9a] transition-all duration-300 ${expanded ? 'rotate-180 bg-[#b8954e]/10 text-[#b8954e]' : ''}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Transport pill */}
        {day.transport && (
          <div className="mx-5 mb-4 px-4 py-3 bg-[#f8f7f5] border border-[#e5e5e5] rounded-xl">
            <div className="flex items-center gap-2 text-sm text-[#6b6b6b]">
              <span className="text-[#b8954e]">
                <IconSvg type={getIcon(day.transport.mode)} />
              </span>
              <span>{day.transport.from}</span>
              <span className="text-[#d4d4d4]">→</span>
              <span className="font-medium text-[#1a1a1a]">{day.transport.to}</span>
              <span className="text-[#d4d4d4]">·</span>
              <span>{day.transport.duration}</span>
              {day.transport.price && (
                <>
                  <span className="text-[#d4d4d4]">·</span>
                  <span className="text-[#b8954e] font-medium">{day.transport.price}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Detail content */}
        {expanded && (
          <div className="px-5 pb-5 space-y-0 border-t border-[#f0f0f0]">
            {day.highlights.map((h, i) => (
              <div key={i} className="py-4 flex gap-4 border-b border-[#f5f5f5] last:border-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#faf6ee] flex items-center justify-center text-[#b8954e]">
                  <IconSvg type={getIcon(h.icon)} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    {h.time && (
                      <span className="text-xs font-medium text-[#b8954e] bg-[#faf6ee] px-2 py-0.5 rounded">
                        {h.time}
                      </span>
                    )}
                    <h4 className="font-semibold text-[#1a1a1a]">{h.title}</h4>
                    {h.duration && (
                      <span className="text-xs text-[#9a9a9a]">{h.duration}</span>
                    )}
                    {h.price && (
                      <span className="text-xs text-[#b8954e] bg-[#faf6ee] px-2 py-0.5 rounded">
                        {h.price}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">{h.description}</p>
                  {h.tip && (
                    <p className="text-xs text-[#b8954e]/70 mt-2 flex items-center gap-1">
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {h.tip}
                    </p>
                  )}
                  {h.link && (
                    <a
                      href={h.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#b8954e] hover:text-[#8a6e3a] font-medium mt-2"
                    >
                      預約 / 了解更多
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                  {h.image && (
                    <div className="mt-3 rounded-xl overflow-hidden">
                      <img src={h.image} alt={h.title} className="w-full h-36 md:h-44 object-cover" loading="lazy" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface ItinerarySectionProps {
  days: DayPlan[];
  title?: string;
  subtitle?: string;
  transportSummary?: string[];
}

export default function ItinerarySection({
  days,
  title = "行程總覽",
  subtitle = "經典路線一次玩透",
  transportSummary = [
    "TPE → BCN 18h55m",
    "BCN → Madrid 2h30m",
    "Madrid → Córdoba 1h45m",
    "Córdoba → Sevilla 45m",
    "Sevilla → Granada 2h30m",
    "GRX → BCN 1h40m",
  ],
}: ItinerarySectionProps) {
  return (
    <section id="itinerary" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="tag-gold mb-4 inline-block">The Itinerary</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mt-4 mb-4 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {title}
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#6b6b6b] max-w-lg mx-auto text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-5">
          {days.map((day, i) => (
            <DayCard key={day.day} day={day} index={i} />
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 card-editorial p-8">
          <h3 className="font-semibold text-[#1a1a1a] text-center mb-6 text-lg">全程交通一覽</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {transportSummary.map((s, i) => (
              <span key={i} className="px-3 py-1.5 bg-[#f8f7f5] text-[#6b6b6b] text-sm rounded-lg border border-[#e5e5e5]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
