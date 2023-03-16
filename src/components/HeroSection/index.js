import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ButtonLink, Spacer } from "@/styled-components";

const techStacks = [
  { name: "React", color: "#00bfc1" },
  { name: "Redux", color: "#643692" },
  { name: "React Native", color: "#00bfc1" },
  { name: "Flutter", color: "#fc8104" },
  { name: "NodeJS", color: "#91c63c" },
  { name: "Express", color: "#ebd519" },
  { name: "Next.js", color: "#65d0ca" },
  { name: "Framer Motion", color: "#c929a1" },
  { name: "Tailwind CSS", color: "#11b0b6" },
  { name: "Git", color: "#e44c31" },
];

// markup
const HeroSection = () => {
  return (
    <Section
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MainTitle>
        Hi, I'm Sai Akhil Mulpuri,
        <ClipText>
          I develop using <span />
        </ClipText>
      </MainTitle>
      <Spacer width={0} height={32} />
      <ButtonLink href="/contact">
        Let's talk <span>→</span>
      </ButtonLink>
    </Section>
  );
};

export default HeroSection;

const Section = styled(motion.section)`
  height: 50vh;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding: 0 9rem;
  @media only screen and (max-width: 768px) {
    padding: 0 3rem;
  }
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  color: #ffffff;
  letter-spacing: 0em;
  position: relative;
  user-select: none;
  padding: 0;
  margin: 0;
  color: #fff;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ClipText = styled(motion.div)`
  color: #e4e8ec;
  & span {
    text-indent: 8px;

    @keyframes topToBottom {
      ${techStacks.map((tech, index) => {
        return `
        ${(100 / techStacks.length) * index}% {
          content: "${tech.name}.";
          color: ${tech.color};
        }
        `;
      })}
    }
    &:before {
      content: "React.";
      color: #00bfc1;
      animation: topToBottom 15s infinite 0s;
    }
  }
`;
