import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Akhil</Heading>
      <Paragraph className="max-w-xl mt-4">
        As a dedicated full-stack developer, I am passionate about
        <Highlight>building products</Highlight> and web applications that have
        the potential to make a significant impact on millions of lives. My
        focus is on creating innovative solutions that address real-world
        problems and enhance user experiences.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        With over <Highlight>3+ years of experience</Highlight> in software
        engineering, I specialize in developing scalable and
        performance-optimized web applications. My expertise lies in ensuring
        that these applications are not only highly efficient but also
        aesthetically pleasing, providing users with seamless and engaging
        interactions.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Throughout my career, I have honed my skills in various technologies and
        frameworks, including{" "}
        <Highlight>
          HTML5, CSS3, JavaScript, React.js, React Native, Node.js, ExpressJS,
          and SQL databases
        </Highlight>
        . My proficiency in these areas enables me to deliver high-quality,
        maintainable, and scalable code that meets the evolving needs of the
        industry.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
