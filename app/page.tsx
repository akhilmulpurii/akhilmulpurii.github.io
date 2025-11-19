import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Codex from "@/components/sections/Codex";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Hero />
      <Projects />
      <Codex />
      <Contact />
    </main>
  );
}
