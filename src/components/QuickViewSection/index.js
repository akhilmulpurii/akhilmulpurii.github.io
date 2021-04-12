import * as React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { data } from "./data";
import { navigate } from "gatsby";

// markup
const QuickViewSection = () => {
  return (
    <Section
      id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <Grid>
        {data.projects
          .filter((_, i) => i < 3)
          .map((project, index) => (
            <ProjectImageContainer
              // onClick={() => navigate(`/projects/${project.urlSlug}`)}
              title={project.title}
              large={project.large}
              initial={{ opacity: 0, scale: 1.2, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.7 + index * 0.5,
                ease: "easeOut",
              }}
              background={project.background}
            >
              <img src={project.image} />
            </ProjectImageContainer>
          ))}
      </Grid>
    </Section>
  );
};

export default QuickViewSection;

const Section = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1440px;
  grid-gap: 24px;
  @media only screen and (max-width: 1440px) {
    padding: 0 20px;
    grid-gap: 20px;
  }
  @media only screen and (max-width: 940px) {
    padding: 0 20px;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 640px) {
    padding: 0 20px;
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
`;

const ProjectImageContainer = styled(motion.div)`
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 1.3s;
  }
  padding: 48px;

  ${({ large }) =>
    large &&
    css`
      grid-column: 1 /3;
      grid-row: 1/3;
    `};
  @media only screen and (max-width: 640px) {
    grid-column: auto;
    grid-row: auto;
  }
  ${css`
    ${({ background }) => background};
  `};
  &:after {
    opacity: 0;
    content: ${({ title }) => "'" + title + "'" || ""};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    text-align: center;
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(83, 105, 118, 0.8) 0%,
      rgba(41, 46, 73, 0.8) 100%
    );
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    border-radius: 10px;
  }
  &:hover {
    & img {
      transform: scale(1.1);
    }
    &:after {
      opacity: 1;
    }
  }
`;
