"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import projects from "@/lib/projects";

type CaseStudy = {
  thumbnail: string;
  title: string;
  link: string;
};

const buildCaseStudies = (): CaseStudy[] => {
  const grouped = projects.map((project) => {
    const thumbs =
      project.images && project.images.length > 0
        ? project.images
        : [project.sections?.[0]?.image, project.card_image].filter(
            (src): src is string => Boolean(src),
          );

    return {
      title: project.title,
      link: project.urlSlug ? `/projects/${project.urlSlug}` : "#",
      thumbs,
    };
  });

  // Round-robin interleave to avoid clustering the same project consecutively.
  const results: CaseStudy[] = [];
  let remaining = grouped.some((g) => g.thumbs.length > 0);
  while (remaining) {
    remaining = false;
    for (const group of grouped) {
      if (!group.thumbs.length) continue;
      const thumbnail = group.thumbs.shift();
      if (!thumbnail) continue;
      const entry: CaseStudy = {
        thumbnail,
        title: group.title,
        link: group.link,
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
