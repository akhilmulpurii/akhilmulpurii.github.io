import ContactUsSection from "@/components/sections/contact-us-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { GithubActivitySection } from "@/components/sections/github-activity-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <TechStackSection />
      <GithubActivitySection />
      <CaseStudiesSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
}
