import ProjectCard from "@/components/ui/ProjectCard";
import projects from "@/lib/projects";
import React, { FunctionComponent } from "react";

interface HomeProjectSectionProps {}

const HomeProjectSection: FunctionComponent<HomeProjectSectionProps> = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.urlSlug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default HomeProjectSection;
