import projects from "@/lib/projects";
import { DestinationCard } from "@/components/ui/card-21"; // Adjust the import path

const ProjectListCardSection = () => {
  return (
    <section className="relative w-full bg-[#0f0a06] py-16 text-[#f6dfc3]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(244,162,97,0.12), transparent 28%), radial-gradient(circle at 84% 12%, rgba(231,111,81,0.12), transparent 30%), radial-gradient(circle at 52% 88%, rgba(255,214,170,0.12), transparent 38%)",
          backgroundColor: "#0f0a06",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <DestinationCard
              key={project.urlSlug}
              color="#f4a261"
              location={project.title}
              stats={project.short_description || project.description}
              imageUrl={project.card_image}
              logo={project.logo}
              href={`/projects/${project.urlSlug}`}
              themeColor="26 87% 67%"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectListCardSection;
