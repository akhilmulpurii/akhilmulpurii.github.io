import Image from "next/image";
import { ProjectSection } from "@/lib/projects";

interface ProjectDetailsListProps {
  sections: ProjectSection[];
  primaryColor: string;
  textColor: string;
  isDark: boolean;
}

export function ProjectDetailsList({
  sections,
  primaryColor,
  textColor,
  isDark,
}: ProjectDetailsListProps) {
  return (
    <div className="flex flex-col gap-0 pb-40">
      {sections.map((section, idx) => {
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
                  style={{ color: primaryColor }}
                >
                  ( 0{idx + 1} ) — {isEven ? "ANALYSIS" : "DETAILS"}
                </span>
                <h2
                  className="text-5xl md:text-6xl font-anton uppercase leading-[0.9] mb-8"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: `1px ${isDark ? textColor : primaryColor}`,
                  }}
                >
                  {section.heading}
                </h2>
                <p
                  className={`text-sm md:text-base font-mono leading-relaxed opacity-70 ${
                    isEven ? "border-l-2 pl-4" : "border-r-2 pr-4"
                  }`}
                  style={{ borderColor: primaryColor }}
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
                  style={{ borderColor: primaryColor }}
                />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

