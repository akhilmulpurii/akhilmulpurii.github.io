import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title?: string;
  highlightText?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  colors?: string[];
  distortion?: number;
  swirl?: number;
  speed?: number;
  offsetX?: number;
  className?: string;
  minHeightClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
  maxWidth?: string;
  veilOpacity?: string;
  fontFamily?: string;
  fontWeight?: number;
}

export function HeroSection({
  title = "Intelligent AI Agents for",
  highlightText = "Smart Brands",
  description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
  buttonText = "Join Waitlist",
  onButtonClick,
  colors = ["#1b120c", "#f4a261", "#0f0a06", "#e76f51", "#24160d", "#f0cfa2"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  minHeightClassName = "min-h-screen",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  maxWidth = "max-w-6xl",
  veilOpacity = "bg-white/20 dark:bg-black/25",
  fontFamily = "Satoshi, sans-serif",
  fontWeight = 500,
}: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <section
      className={`relative w-full ${minHeightClassName} overflow-hidden bg-background flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 h-full w-full">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div
              className={`absolute inset-0 pointer-events-none ${veilOpacity}`}
            />
          </>
        )}
      </div>

      <div className={`relative z-10 ${maxWidth} mx-auto w-full px-6`}>
        <div className="flex flex-col gap-6 text-left sm:gap-8">
          <div className="flex flex-col gap-3">
            <h1
              className={`text-balance text-4xl font-black leading-[1.05] text-[#f7d7a3] drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl xl:text-[72px] ${titleClassName}`}
              style={{ fontFamily, fontWeight: fontWeight || 800 }}
            >
              {title}{" "}
              <span className="bg-gradient-to-r from-[#f4a261] via-[#f7d7a3] to-[#e76f51] bg-clip-text text-transparent">
                {highlightText}
              </span>
            </h1>
          </div>

          <p
            className={`max-w-3xl text-base font-medium leading-relaxed text-[#f3dfbe]/85 sm:text-lg ${descriptionClassName}`}
          >
            {description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={handleButtonClick}
              className={`group inline-flex items-center justify-between gap-4 border border-[#f7d7a3]/60 bg-[#0f0a06] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f7d7a3] shadow-[6px_6px_0_#1b120c] transition-all duration-150 hover:-translate-y-[3px] hover:shadow-[10px_10px_0_#1b120c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4a261] ${buttonClassName}`}
            >
              <span className="flex-1 text-left">{buttonText}</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f4a261]/60 bg-[#1a120c] text-[11px] tracking-[0.1em] shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-colors duration-150 group-hover:bg-[#24160d]">
                Go
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
