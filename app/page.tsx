import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
