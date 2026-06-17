"use client";

import { useState } from "react";
import { DAYS } from "../data";
import { DayPlan } from "../types";

function DayCard({ day, index }: { day: DayPlan; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <div
        className={`card-hover glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
          expanded ? "bg-stone-800/90" : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="p-6 flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-600/20 border border-amber-600/30 flex items-center justify-center text-2xl">
            {day.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm font-mono text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-full">
                Day {day.day}
              </span>
              <span className="text-sm text-stone-500">{day.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-stone-100">{day.title}</h3>
            <p className="text-stone-400 mt-0.5">{day.subtitle}</p>
          </div>
          <div className="flex-shrink-0 text-stone-500 transition-transform duration-300" style={{ transform: expanded ? "rotate(180deg)" : "" }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Transport pill */}
        {day.transport && (
          <div className="mx-6 mb-4 px-4 py-2 bg-amber-600/10 border border-amber-600/20 rounded-lg text-sm text-amber-300/90">
            {day.transport.mode} {day.transport.from} → {day.transport.to} · {day.transport.duration}
            {day.transport.price && ` · ${day.transport.price}`}
          </div>
        )}

        {/* Expanded highlights */}
        {expanded && (
          <div className="px-6 pb-6 space-y-4">
            <div className="border-t border-stone-700/50 pt-4" />
            {day.highlights.map((h, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-sm">
                  {h.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    {h.time && <span className="text-xs font-mono text-amber-500/70 whitespace-nowrap">{h.time}</span>}
                    <h4 className="text-sm font-medium text-stone-200">{h.title}</h4>
                    {h.duration && <span className="text-xs text-stone-500">{h.duration}</span>}
                    {h.price && <span className="text-xs text-emerald-400/80">{h.price}</span>}
                  </div>
                  <p className="text-sm text-stone-400 mt-1">{h.description}</p>
                  {h.tip && (
                    <p className="text-xs text-amber-400/70 mt-1">💡 {h.tip}</p>
                  )}
                  {h.link && (
                    <a href={h.link} target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-amber-500 hover:text-amber-400 mt-1 underline underline-offset-2">
                      預約 / 官網 →
                    </a>
                  )}
                  {h.image && (
                    <div className="mt-2 rounded-lg overflow-hidden">
                      <img src={h.image} alt={h.title} className="w-full h-32 md:h-40 object-cover" loading="lazy" />
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
    <section id="itinerary" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-widest mb-3">THE PLAN</p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-100 mb-4">
            每日行程詳解
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            點擊展開每一天，查看詳細時間、景點、交通與小祕訣
          </p>
        </div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 timeline-line opacity-40" />

          <div className="space-y-6 relative">
            {DAYS.map((day, i) => (
              <DayCard key={day.day} day={day} index={i} />
            ))}
          </div>
        </div>

        {/* Summary bar */}
        <div className="mt-12 glass rounded-2xl p-6 text-center">
          <p className="text-stone-400 mb-3">🚄 全程移動一覽</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-3 py-1.5 bg-stone-800 rounded-full">🛫 TPE→BCN (18h55m)</span>
            <span className="px-3 py-1.5 bg-stone-800 rounded-full">🚄 BCN→Madrid (2h30m)</span>
            <span className="px-3 py-1.5 bg-stone-800 rounded-full">🚄 Madrid→Córdoba (1h45m)</span>
            <span className="px-3 py-1.5 bg-stone-800 rounded-full">🚄 Córdoba→Sevilla (45m)</span>
            <span className="px-3 py-1.5 bg-stone-800 rounded-full">🚄 Sevilla→Granada (2h30m)</span>
            <span className="px-3 py-1.5 bg-stone-800 rounded-full">✈️ GRX→BCN (1h40m)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
