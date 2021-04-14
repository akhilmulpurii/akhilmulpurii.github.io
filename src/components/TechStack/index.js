import { motion } from "framer-motion";
import * as React from "react";
import styled, { css } from "styled-components";

const TechStack = ({ technologies = [], background }) => {
  return (
    <Container
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      background={background}
    >
      <Wrapper>
        <Text
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          TECH STACK
        </Text>
        {technologies.map((tech, index) => (
          <Chip
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 + index * 0.3 }}
            key={tech}
          >
            {tech}
          </Chip>
        ))}
      </Wrapper>
    </Container>
  );
};

export default TechStack;

const Container = styled(motion.section)`
  display: flex;
  width: 100%;
  ${({ background }) =>
    background &&
    css`
      ${background}
    `}
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;

  @media only screen and (max-width: 940px) {
    flex-direction: column;
  }
`;

const Chip = styled(motion.div)`
  background-color: #141414;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  display: flex;
  @media only screen and (max-width: 940px) {
    margin: 4px 0;
  }
`;

const Text = styled(motion.span)`
  color: #141414;
  font-size: 24px;
  font-weight: 300;
  padding-right: 20px;
  position: relative;
  &:after {
    content: "";
    height: 100%;
    width: 1px;
    background-color: #141414;
    display: flex;
    position: absolute;
    right: 6px;
    top: 0;
    bottom: 0;
  }
  @media only screen and (max-width: 940px) {
    padding-right: 0;
    padding-bottom: 20px;
    &:after {
      height: 1px;
      width: 100%;
      right: 0;
      left: 0;
      bottom: 12px;
      top: auto;
    }
  }
`;
