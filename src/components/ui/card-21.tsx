import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

// Define the props for the DestinationCard component
interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string;
  stats: string;
  href: string;
  themeColor: string; // e.g., "150 50% 25%" for a deep green
  aspectRatio?: string; // e.g., "4 / 5"
  logo?: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      flag,
      stats,
      href,
      themeColor,
      aspectRatio = "4 / 5",
      logo,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("group w-full h-full relative", className)}
        {...props}
      >
        <a
          href={href}
          className="block w-full h-full overflow-hidden bg-neutral-900 relative isolate"
          style={{
            aspectRatio,
          }}
        >
          {/* Image Layer - Grayscale by default, Color on hover */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Image
              src={imageUrl}
              alt={location}
              fill
              sizes="(min-width: 1280px) 360px, (min-width: 768px) 320px, 100vw"
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>

          {/* Noise & Texture Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Gradient Overlay - Darken bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90 z-10" />

          {/* Accent Color Glow on Hover */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40 mix-blend-color z-20"
            style={{
              backgroundColor: `hsl(${themeColor})`,
            }}
          />

          {/* Content Container */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between z-30">
            {/* Top Bar - Logo Reveal */}
            <div className="flex justify-between items-start">
              <div className="h-8 w-auto max-w-[100px] opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {logo && (
                  <Image
                    src={logo}
                    alt="logo"
                    width={100}
                    height={40}
                    className="h-full w-full object-contain grayscale contrast-125 brightness-125"
                  />
                )}
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[#f4a261] transition-colors duration-300" />
            </div>

            {/* Bottom Content */}
            <div className="relative translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
              {/* Animated Divider */}
              <div className="w-8 h-px bg-[#f4a261] mb-4 transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />

              <h3 className="text-2xl font-black uppercase tracking-tighter text-white mix-blend-difference mb-2">
                {location}
              </h3>

              <div className="overflow-hidden h-0 transition-all duration-500 group-hover:h-auto">
                <p className="text-xs leading-relaxed text-white/70 font-light line-clamp-3 pb-2">
                  {stats}
                </p>
                <div className="pt-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#f4a261]">
                  <span>View Case Study</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-[#f4a261]/30 z-40 pointer-events-none" />
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
