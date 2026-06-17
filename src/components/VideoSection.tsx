"use client";

import { CITY_VIDEOS } from "../data";
import { useState } from "react";

export default function VideoSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full tracking-wider uppercase">
            Videos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#222222] mt-4 mb-4 tracking-tight">
            🎬 出發前先看
          </h2>
          <p className="text-[#6a6a6a] max-w-lg mx-auto text-lg">
            用影片預習四大城市的精華
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CITY_VIDEOS.map((video, i) => (
            <div key={i} className="card-airbnb overflow-hidden">
              <div className="relative aspect-video bg-stone-100 overflow-hidden">
                {activeId === video.embedId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <button
                        onClick={() => setActiveId(video.embedId)}
                        className="w-16 h-16 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <svg className="w-6 h-6 text-[#222222] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-rose-500">{video.city}</span>
                </div>
                <p className="text-sm text-[#6a6a6a]">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
