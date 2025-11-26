import { DockNavigation } from "@/components/sections/dock-navigation";
import { FooterSection } from "@/components/sections/footer-section";
import ProjectHeroSection from "@/components/sections/project-hero-section";
const ProjectPage = () => {
  return (
    <div>
      <ProjectHeroSection />
      <FooterSection />
      <DockNavigation />
    </div>
  );
};

export default ProjectPage;
