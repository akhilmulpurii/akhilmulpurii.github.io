import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// markup
const HeroSection = () => {
  return (
    <Section
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <MainTitle>
        Akhil
        <ClipText>UI-UX Developer</ClipText>
      </MainTitle>
      {/* Akhil Mulpuri,
      <br />
      UI-UX Developer */}
    </Section>
  );
};

export default HeroSection;

const Section = styled(motion.section)`
  /* font-size: 10vw;
  font-weight: 800; */
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MainTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 18vw;
  color: #ffffff;
  text-shadow: 16px 16px 0 #676d67;
  -webkit-text-shadow: 16px 16px 0 #676d67;
  -moz-text-shadow: 16px 16px 0 #676d67;
  letter-spacing: 0.1em;
  position: relative;
  user-select: none;
  padding: 0;
  margin: 0;
`;

const ClipText = styled.div`
  color: #00bfc1;
  text-shadow: none;
  position: absolute;
  font-size: 2vw;
  font-weight: 300;
  letter-spacing: 1rem;
  background-color: #030d03;
  user-select: none;
  top: 45%;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  tranform: translateY(-40%);
`;
