import Image from "next/image";

interface ProjectGalleryHeroProps {
  image: string;
  title: string;
  primaryColor: string;
}

export function ProjectGalleryHero({
  image,
  title,
  primaryColor,
}: ProjectGalleryHeroProps) {
  if (!image) return null;

  return (
    <div className="w-full h-[60vh] md:h-[90vh] relative mb-20 flex items-center justify-center overflow-hidden group">
      {/* 1. Atmospheric Blurred Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover blur-[60px] opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* 2. Main Square Image Container */}
      <div className="relative z-10 w-[85vw] h-[85vw] md:w-auto md:h-[80vh] md:aspect-square shadow-2xl bg-neutral-900/20 backdrop-blur-sm">
        {/* Corner Accents */}
        <div
          className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 transition-all duration-500 group-hover:-top-6 group-hover:-left-6"
          style={{ borderColor: primaryColor }}
        />
        <div
          className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6"
          style={{ borderColor: primaryColor }}
        />

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />

        {/* Inner Border */}
        <div className="absolute inset-0 border border-white/10 pointer-events-none" />
      </div>
    </div>
  );
}

