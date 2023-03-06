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
      Akhil Mulpuri,
      <br />
      UI-UX Developer
    </Section>
  );
};

export default HeroSection;

const Section = styled(motion.section)`
  font-size: 10vw;
  font-weight: 800;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
