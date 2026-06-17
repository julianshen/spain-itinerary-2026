"use client";

import { ATTRACTIONS } from "../data";

export default function AttractionsSection() {
  return (
    <section id="attractions" className="py-20 md:py-28 px-5 md:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full tracking-wider uppercase">
            Must-See
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mt-4 mb-4 tracking-tight">
            必去景點
          </h2>
          <p className="text-[#6a6a6a] max-w-lg mx-auto text-lg">
            從馬德里皇宮到聖家堂，每一個都是此生必訪
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATTRACTIONS.map((a, i) => (
            <div
              key={i}
              className="card-airbnb overflow-hidden group"
            >
              {/* Image with zoom */}
              <div className="relative h-52 overflow-hidden img-zoom">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {a.city}
                  </span>
                  <span className="text-2xl drop-shadow-lg">{a.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#222222] mb-2">{a.name}</h3>
                <p className="text-sm text-[#6a6a6a] mb-4 leading-relaxed">{a.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-stone-400 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    建議 {a.timeNeeded}
                  </span>
                </div>

                {/* Tips */}
                <div className="space-y-1.5 mb-5">
                  {a.tips.map((tip, j) => (
                    <p key={j} className="text-xs text-stone-500 flex items-start gap-1.5">
                      <span className="text-rose-400 flex-shrink-0 mt-0.5">💡</span>
                      <span>{tip}</span>
                    </p>
                  ))}
                </div>

                {a.ticketLink && (
                  <a
                    href={a.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#222222] text-white text-sm font-medium rounded-lg hover:bg-black transition-all"
                  >
                    預約門票 →
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
