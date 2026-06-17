"use client";

import { CITY_VIDEOS } from "../data";
import { useState } from "react";

export default function VideoSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-widest mb-3">VIDEOS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-100 mb-4">
            🎬 出發前先看影片
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            用 10 分鐘預習西班牙四大城市的精華
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CITY_VIDEOS.map((video, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden card-hover"
            >
              <div className="relative aspect-video bg-stone-900">
                {activeId === video.embedId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
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
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                      <button
                        onClick={() => setActiveId(video.embedId)}
                        className="w-16 h-16 rounded-full bg-amber-600/90 hover:bg-amber-500 flex items-center justify-center transition-all duration-200 shadow-lg shadow-amber-600/30 hover:scale-110"
                      >
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-amber-400/70">{video.city}</span>
                </div>
                <p className="text-sm text-stone-400">{video.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500">
            📺 點擊影片播放 — YouTube 上的優質西班牙旅遊介紹
          </p>
        </div>
      </div>
    </section>
  );
}
