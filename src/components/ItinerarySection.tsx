"use client";

import { useState } from "react";
import { DAYS } from "../data";

function DayCard({ day, index }: { day: (typeof DAYS)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
      <div
        className="card-airbnb p-0 overflow-hidden cursor-pointer group"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header bar */}
        <div className="flex items-center gap-4 p-5">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center text-2xl shadow-sm">
            {day.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md">
                DAY {day.day}
              </span>
              <span className="text-sm text-stone-400">{day.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-[#222222]">{day.title}</h3>
            <p className="text-sm text-[#6a6a6a]">{day.subtitle}</p>
          </div>
          <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 transition-all duration-300 ${expanded ? 'rotate-180 bg-rose-100 text-rose-500' : ''}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Transport pill */}
        {day.transport && (
          <div className="mx-5 mb-4 px-4 py-2.5 bg-stone-50 border border-stone-100 rounded-xl">
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <span className="text-lg">{day.transport.mode}</span>
              <span>{day.transport.from}</span>
              <span className="text-stone-300">→</span>
              <span className="font-medium text-stone-800">{day.transport.to}</span>
              <span className="text-stone-300">·</span>
              <span>{day.transport.duration}</span>
              {day.transport.price && (
                <>
                  <span className="text-stone-300">·</span>
                  <span className="text-emerald-600 font-medium">{day.transport.price}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Detail content */}
        {expanded && (
          <div className="px-5 pb-5 space-y-0 border-t border-stone-100">
            {day.highlights.map((h, i) => (
              <div key={i} className="py-4 flex gap-4 border-b border-stone-50 last:border-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-lg">
                  {h.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    {h.time && (
                      <span className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-0.5 rounded">
                        {h.time}
                      </span>
                    )}
                    <h4 className="font-semibold text-[#222222]">{h.title}</h4>
                    {h.duration && (
                      <span className="text-xs text-stone-400">⏱ {h.duration}</span>
                    )}
                    {h.price && (
                      <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        {h.price}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#6a6a6a] leading-relaxed">{h.description}</p>
                  {h.tip && (
                    <p className="text-xs text-rose-600/70 mt-2 flex items-center gap-1">
                      <span>💡</span> {h.tip}
                    </p>
                  )}
                  {h.link && (
                    <a
                      href={h.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-rose-500 hover:text-rose-600 font-medium mt-2"
                    >
                      預約 / 了解更多 →
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

export default function ItinerarySection() {
  return (
    <section id="itinerary" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full tracking-wider uppercase">
            The Itinerary
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mt-4 mb-4 tracking-tight">
            11 天，5 座城市
          </h2>
          <p className="text-[#6a6a6a] max-w-lg mx-auto text-lg">
            從馬德里一路南下安達魯西亞，再回到巴塞隆納走完高第之路
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-5">
          {DAYS.map((day, i) => (
            <DayCard key={day.day} day={day} index={i} />
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 card-airbnb p-8">
          <h3 className="font-semibold text-[#222222] text-center mb-6">🚄 全程交通一覽</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "🛫 TPE→BCN 18h55m",
              "🚄 BCN→Madrid 2h30m",
              "🚄 Madrid→Córdoba 1h45m",
              "🚄 Córdoba→Sevilla 45m",
              "🚄 Sevilla→Granada 2h30m",
              "✈️ GRX→BCN 1h40m",
            ].map((s, i) => (
              <span key={i} className="px-3 py-1.5 bg-stone-50 text-stone-600 text-sm rounded-lg border border-stone-100">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
