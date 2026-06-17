"use client";

import { HOTELS } from "../data";

export default function HotelsSection() {
  return (
    <section id="hotels" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-widest mb-3">ACCOMMODATIONS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-100 mb-4">
            🏨 住宿推薦
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            每間都是精選，連結 Booking / 官網直接查價
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {HOTELS.map((hotel, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden card-hover">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 img-overlay" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-stone-400 bg-stone-900/70 px-2 py-1 rounded-full">
                      {hotel.city}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-5">
                  <h3 className="text-lg font-semibold text-stone-100 mb-1">{hotel.name}</h3>
                  <p className="text-sm text-amber-400/80 mb-2">
                    {hotel.nights} 晚 · {hotel.stars > 0 ? `${hotel.stars} 星` : ""} · {hotel.priceRange}
                  </p>
                  <p className="text-sm text-stone-400 mb-3">{hotel.description}</p>

                  <ul className="space-y-1 mb-4">
                    {hotel.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-stone-500 flex items-start gap-1.5">
                        <span className="text-emerald-400/70 mt-0.5">✓</span>
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
                        className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs rounded-lg border border-stone-700 transition-all"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>

                  {hotel.note && (
                    <p className="text-xs text-amber-400/60 mt-3">{hotel.note}</p>
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
