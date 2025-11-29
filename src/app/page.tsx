import ContactUsSection from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { GithubActivitySection } from "@/components/sections/github-activity-section";
import { DockNavigation } from "@/components/sections/dock-navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#0f0a06] font-sans text-[#f6dfc3]">
      <HeroSection />
      <TechStackSection />
      <GithubActivitySection />
      <CaseStudiesSection />
      <div id="contact" className="w-full">
        <ContactUsSection />
      </div>
      <FooterSection />
      <DockNavigation />
    </div>
  );
}
