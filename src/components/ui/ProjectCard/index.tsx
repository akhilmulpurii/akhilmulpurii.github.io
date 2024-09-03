import { Project } from "@/lib/projects";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.urlSlug}`}
      className="bg-card aspect-square"
    >
      <div>
        <img />
      </div>
      <div>{project.title}</div>
    </Link>
  );
};

export default ProjectCard;
