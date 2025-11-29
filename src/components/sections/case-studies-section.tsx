"use client";

import { HeroParallax, ProductItem } from "@/components/ui/hero-parallax";
import projects from "@/lib/projects";

interface ProjectGroup {
  title: string;
  link: string;
  logo: string;
  shortDescription: string;
  technologies: string[];
  year: string;
  platform: string;
  thumbs: string[];
}

const buildCaseStudies = (): ProductItem[] => {
  const grouped: ProjectGroup[] = projects.map((project) => {
    const thumbs =
      project.images && project.images.length > 0
        ? project.images
        : [project.sections?.[0]?.image, project.card_image].filter(
            (src): src is string => Boolean(src),
          );

    return {
      title: project.title,
      link: project.urlSlug ? `/projects/${project.urlSlug}` : "#",
      logo: project.logo,
      shortDescription: project.short_description,
      technologies: project.technologies,
      year: project.year,
      platform: project.platform,
      thumbs,
    };
  });

  // Round-robin interleave to avoid clustering the same project consecutively.
  const results: ProductItem[] = [];
  let remaining = grouped.some((g) => g.thumbs.length > 0);
  while (remaining) {
    remaining = false;
    for (const group of grouped) {
      if (!group.thumbs.length) continue;
      const thumbnail = group.thumbs.shift();
      if (!thumbnail) continue;
      const entry: ProductItem = {
        thumbnail,
        title: group.title,
        link: group.link,
        logo: group.logo,
        shortDescription: group.shortDescription,
        technologies: group.technologies,
        year: group.year,
        platform: group.platform,
      };
      if (results.length && results[results.length - 1].title === entry.title) {
        // If the same project would repeat, try to insert earlier spot.
        const swapIndex = results.findIndex(
          (item) => item.title !== entry.title,
        );
        if (swapIndex >= 0) {
          results.splice(swapIndex, 0, entry);
        } else {
          results.push(entry);
        }
      } else {
        results.push(entry);
      }
      remaining = remaining || group.thumbs.length > 0;
    }
  }

  return results;
};

const caseStudies = buildCaseStudies();

export function CaseStudiesSection() {
  return <HeroParallax products={caseStudies} />;
}
