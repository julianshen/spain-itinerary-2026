"use client";

import { CityVideo } from "../types";
import { useState } from "react";

interface VideoSectionProps {
  videos: CityVideo[];
  title?: string;
  subtitle?: string;
}

export default function VideoSection({
  videos,
  title = "出發前先看",
  subtitle = "用影片預習四大城市的精華",
}: VideoSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="tag-gold mb-4 inline-block">Videos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mt-4 mb-4 tracking-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {title}
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#6b6b6b] max-w-lg mx-auto text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <div key={i} className="card-editorial overflow-hidden">
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
                        <svg className="w-6 h-6 text-[#1a1a1a] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-[#b8954e]">{video.city}</span>
                </div>
                <p className="text-sm text-[#6b6b6b]">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
