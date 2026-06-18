"use client";

import { Hotel } from "../types";

interface HotelsSectionProps {
  hotels: Hotel[];
  title?: string;
  subtitle?: string;
}

export default function HotelsSection({
  hotels,
  title = "住宿精選",
  subtitle = "每間都是仔細挑選，點連結直接查價預訂",
}: HotelsSectionProps) {
  return (
    <section id="hotels" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="tag-gold mb-4 inline-block">Accommodations</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mt-4 mb-4 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {title}
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#6b6b6b] max-w-lg mx-auto text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {hotels.map((hotel, i) => (
            <div key={i} className="card-editorial overflow-hidden">
              <div className="md:flex">
                {/* Image - 3:2 aspect ratio */}
                <div className="md:w-2/5 relative overflow-hidden img-zoom" style={{ minHeight: "200px" }}>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs bg-white/90 backdrop-blur-sm text-[#1a1a1a] px-2.5 py-1 rounded-full font-medium shadow-sm">
                      {hotel.city}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-5">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">{hotel.name}</h3>
                  <p className="text-sm text-[#b8954e] font-medium mb-2">
                    {hotel.nights} 晚 {hotel.stars > 0 ? `· ${hotel.stars} 星` : ""} · {hotel.priceRange}
                  </p>
                  <p className="text-sm text-[#6b6b6b] mb-4 leading-relaxed">{hotel.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {hotel.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-[#6b6b6b] flex items-start gap-1.5">
                        <span className="text-[#b8954e] flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
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
                        className="px-3.5 py-2 bg-[#f8f7f5] hover:bg-[#f0eeeb] text-[#6b6b6b] text-xs font-medium rounded-lg border border-[#e5e5e5] transition-all"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>

                  {hotel.note && (
                    <p className="text-xs text-[#b8954e]/80 mt-3 flex items-center gap-1">
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {hotel.note}
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
