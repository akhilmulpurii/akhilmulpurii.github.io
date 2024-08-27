import HeroSection from "@/components/sections/HeroSection";
import HomeProjectSection from "@/components/sections/HomeProjectSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeProjectSection />
      <div style={{ height: "900vh" }} />
    </main>
  );
}
