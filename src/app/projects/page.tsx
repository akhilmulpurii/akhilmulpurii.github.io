import { DockNavigation } from "@/components/sections/dock-navigation";
import { FooterSection } from "@/components/sections/footer-section";
import ProjectHeroSection from "@/components/sections/project-hero-section";
import ProjectListCardSection from "@/components/sections/project-list-card-section";

const ProjectPage = () => {
  return (
    <div>
      <ProjectHeroSection />
      <ProjectListCardSection />
      <FooterSection />
      <DockNavigation />
    </div>
  );
};

export default ProjectPage;
