import * as React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

// markup
const HeroSection = () => {
  return (
    <Section>
      <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
      <ParticlesBackground />
      Akhil Mulpuri,
      <br />
      UI/UX Developer
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  font-size: 10vw;
  font-weight: 800;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ParticlesBackground = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
