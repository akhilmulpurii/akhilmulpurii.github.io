import { notFound } from "next/navigation";
import projects from "@/lib/projects";
import { ProjectHeroImmersive } from "@/components/sections/project-hero-immersive";
import { FooterSection } from "@/components/sections/footer-section";
import { DockNavigation } from "@/components/sections/dock-navigation";
import { ProjectIntro } from "@/components/sections/project-intro";
import { ProjectGalleryHero } from "@/components/sections/project-gallery-hero";
import { ProjectDetailsList } from "@/components/sections/project-details-list";
import { getLuminance } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ urlSlug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    urlSlug: project.urlSlug,
  }));
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
        <ProjectIntro
          description={project.description}
          strokeColor={strokeColor}
        />

        {/* REDESIGNED CASE STUDY SECTIONS: "The Deconstructed Archive" */}
        <div className="flex flex-col gap-0 pb-40">
          <ProjectGalleryHero
            image={project.card_image}
            title={project.title}
            primaryColor={primary}
          />

          {project.sections && (
            <ProjectDetailsList
              sections={project.sections}
              primaryColor={primary}
              textColor={textColor}
              backgroundColor={background}
              isDark={isDark}
            />
          )}
        </div>

        <FooterSection
          themeColor={primary}
          backgroundColor={background}
          textColor={textColor}
        />
      </div>
      <DockNavigation themeColor={primary} backgroundColor={background} />
    </main>
  );
}
