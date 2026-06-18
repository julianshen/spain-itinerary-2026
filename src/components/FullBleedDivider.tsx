"use client";

interface FullBleedDividerProps {
  image: string;
  alt: string;
  caption?: string;
}

export default function FullBleedDivider({ image, alt, caption }: FullBleedDividerProps) {
  return (
    <section className="full-bleed h-[50vh] md:h-[60vh] relative">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {caption && (
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-white/60" />
            <p className="text-white/80 text-sm md:text-base font-medium tracking-wide">
              {caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
