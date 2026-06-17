"use client";

import { HOTELS } from "../data";

export default function HotelsSection() {
  return (
    <section id="hotels" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full tracking-wider uppercase">
            Accommodations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mt-4 mb-4 tracking-tight">
            住宿精選
          </h2>
          <p className="text-[#6a6a6a] max-w-lg mx-auto text-lg">
            每間都是仔細挑選，點連結直接查價預訂
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {HOTELS.map((hotel, i) => (
            <div key={i} className="card-airbnb overflow-hidden">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs bg-white/90 backdrop-blur-sm text-stone-700 px-2.5 py-1 rounded-full font-medium shadow-sm">
                      {hotel.city}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-5">
                  <h3 className="text-lg font-semibold text-[#222222] mb-1">{hotel.name}</h3>
                  <p className="text-sm text-rose-500 font-medium mb-2">
                    {hotel.nights} 晚 {hotel.stars > 0 ? `· ${hotel.stars} 星` : ""} · {hotel.priceRange}
                  </p>
                  <p className="text-sm text-[#6a6a6a] mb-4 leading-relaxed">{hotel.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {hotel.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-stone-500 flex items-start gap-1.5">
                        <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {hotel.bookingLinks.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-stone-50 hover:bg-stone-100 text-stone-600 text-xs font-medium rounded-lg border border-stone-200 transition-all"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>

                  {hotel.note && (
                    <p className="text-xs text-rose-400 mt-3 flex items-center gap-1">
                      <span>⚠️</span> {hotel.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
