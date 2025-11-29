import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "@/lib/projects";
import { ProjectHeroImmersive } from "@/components/sections/project-hero-immersive";

interface ProjectPageProps {
  params: Promise<{ urlSlug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    urlSlug: project.urlSlug,
  }));
}

// Helper to determine if a color is light or dark
function getLuminance(hex: string) {
  const c = hex.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // SMPTE C-REC.709 luminance
  return luma;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { urlSlug } = await params;
  const project = projects.find((p) => p.urlSlug === urlSlug);

  if (!project) {
    notFound();
  }

  // Extract Theme
  const schemes = project.color_schemes || ["#f4a261", "#e76f51", "#0a0705"];
  const primary = schemes[0];
  const secondary = schemes[1];
  const background = schemes[2];

  const isDark = getLuminance(background) < 128;
  const textColor = isDark ? "#f7f5ef" : "#1a110b";
  const mutedText = isDark
    ? "rgba(247, 245, 239, 0.6)"
    : "rgba(26, 17, 11, 0.6)";
  const strokeColor = isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)";

  const theme = {
    primary,
    secondary,
    background,
    text: textColor,
    isDark,
  };

  return (
    <main
      className="min-h-screen transition-colors duration-700"
      style={{ backgroundColor: background, color: textColor }}
    >
      {/* LOCKED HERO SECTION */}
      <ProjectHeroImmersive project={project} theme={theme} />

      {/* LOCKED INTRO SECTION */}
      <div className="relative z-10" style={{ backgroundColor: background }}>
        <div
          className="max-w-7xl mx-auto px-6 py-24 md:py-40 border-l ml-6 md:ml-20 lg:ml-40 transition-colors duration-700"
          style={{ borderColor: strokeColor }}
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-4xl">
            {project.description}
          </p>
        </div>

        {/* REDESIGNED CASE STUDY SECTIONS: "The Deconstructed Archive" */}
        <div className="flex flex-col gap-0 pb-40">
          {/* Hero Shot - Cinematic Gallery View */}
          {project.card_image && (
            <div className="w-full h-[60vh] md:h-[90vh] relative mb-20 flex items-center justify-center overflow-hidden group">
              {/* 1. Atmospheric Blurred Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.card_image}
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
                  style={{ borderColor: primary }}
                />
                <div
                  className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6"
                  style={{ borderColor: primary }}
                />

                <Image
                  src={project.card_image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Inner Border */}
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </div>

              {/* Technical Marker */}
              <div className="absolute bottom-8 right-8 z-20 font-mono text-xs uppercase tracking-widest bg-black/80 text-white px-3 py-1.5 backdrop-blur-md border border-white/10">
                FIG. 01 — CARD_VIEW_REF
              </div>
            </div>
          )}

          {/* Dynamic Layout Sections */}
          {project.sections?.map((section, idx) => {
            // Alternate layouts: 0 = Text Left / Image Right, 1 = Image Left / Text Right
            const isEven = idx % 2 === 0;

            return (
              <section
                key={section.heading}
                className="py-20 min-h-[80vh] flex flex-col justify-center relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full px-6 md:px-12">
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-4 flex flex-col justify-center lg:sticky lg:top-40 h-fit ${
                      isEven
                        ? "order-2 lg:order-1 text-left items-start"
                        : "order-2 lg:order-2 text-right items-end"
                    }`}
                  >
                    <span
                      className="font-mono text-[10px] uppercase mb-6"
                      style={{ color: primary }}
                    >
                      ( 0{idx + 1} ) — {isEven ? "ANALYSIS" : "DETAILS"}
                    </span>
                    <h2
                      className="text-5xl md:text-6xl font-anton uppercase leading-[0.9] mb-8"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: `1px ${isDark ? textColor : primary}`,
                      }}
                    >
                      {section.heading}
                    </h2>
                    <p
                      className={`text-sm md:text-base font-mono leading-relaxed opacity-70 ${
                        isEven ? "border-l-2 pl-4" : "border-r-2 pr-4"
                      }`}
                      style={{ borderColor: primary }}
                    >
                      {section.caption}
                    </p>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-8 relative aspect-[4/3] lg:aspect-auto lg:h-[80vh] ${
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <Image
                      src={section.image}
                      alt={section.heading}
                      fill
                      className="object-cover"
                    />
                    {/* Decoration */}
                    <div
                      className={`absolute w-20 h-20 border-primary ${
                        isEven
                          ? "-bottom-4 -left-4 border-l border-b"
                          : "-top-4 -right-4 border-r border-t"
                      }`}
                      style={{ borderColor: primary }}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer Spacer */}
        <div
          className="h-[30vh] w-full flex flex-col items-center justify-center border-t relative overflow-hidden"
          style={{ backgroundColor: background, borderColor: strokeColor }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${strokeColor} 0, ${strokeColor} 1px, transparent 0, transparent 50%)`,
            }}
          />
          <p
            className="font-mono text-sm uppercase tracking-[0.5em] z-10"
            style={{ color: mutedText }}
          >
            End of Case Study
          </p>
        </div>
      </div>
    </main>
  );
}
