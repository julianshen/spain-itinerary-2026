"use client";

import { ATTRACTIONS } from "../data";

export default function AttractionsSection() {
  return (
    <section id="attractions" className="py-24 px-6 bg-stone-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-widest mb-3">HIGHLIGHTS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-100 mb-4">
            🔥 必去景點深度介紹
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            從馬德里皇宮到聖家堂，每一個都是此生必訪
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATTRACTIONS.map((a, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-2xl">{a.emoji}</span>
                  <span className="ml-2 text-xs text-amber-400/80 bg-stone-900/60 px-2 py-0.5 rounded-full">
                    {a.city}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{a.name}</h3>
                <p className="text-sm text-stone-400 mb-3">{a.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-stone-500">⏱ {a.timeNeeded}</span>
                </div>

                <div className="space-y-1 mb-4">
                  {a.tips.map((tip, j) => (
                    <p key={j} className="text-xs text-stone-500 flex items-start gap-1.5">
                      <span className="text-amber-500/70 mt-0.5">💡</span>
                      {tip}
                    </p>
                  ))}
                </div>

                {a.ticketLink && (
                  <a
                    href={a.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 text-sm rounded-lg border border-amber-600/30 transition-all duration-200"
                  >
                    🎫 預約門票 →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
