import * as React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import "./styles.scss";

// markup
const ProjectDetailsHero = ({ title, background, platform }) => {
  return (
    <Section
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      background={background}
    >
      <div class="container">
        <div class="box">
          <div class="title">
            <span class="block"></span>
            <h1>
              {title}
              <span></span>
            </h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p>{platform}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectDetailsHero;

const Section = styled(motion.section)`
  overflow: hidden;
  ${({ background }) =>
    background &&
    css`
      ${background};
    `}
`;
