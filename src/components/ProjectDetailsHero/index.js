import * as React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// markup
const ProjectDetailsHero = ({ title, background, platform }) => {
  return (
    <Section
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      background={background}
    >
      <Container>
        <Box>
          <Title>
            <Block />
            <Heading>
              {title}
              <span />
            </Heading>
          </Title>

          <Role>
            <RoleBlock />
            <Platform>{platform}</Platform>
          </Role>
        </Box>
      </Container>
    </Section>
  );
};

export default ProjectDetailsHero;

const Section = styled(motion.section)`
  overflow: hidden;
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}

  @keyframes mainBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes secBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes mainFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes popIn {
    0% {
      width: 0px;
      height: 0px;
      border: 0px solid #ddd;
      opacity: 0;
    }
    50% {
      width: 10px;
      height: 10px;
      opacity: 1;
      bottom: 45px;
    }
    65% {
      width: 7px;
      height: 7px;
      bottom: 0px;
      width: 15px;
    }
    80% {
      width: 10px;
      height: 10px;
      bottom: 20px;
    }
    100% {
      width: 7px;
      height: 7px;
      border: 0px solid #222;
      bottom: 13px;
    }
  }

  @keyframes secFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const Block = styled.div`
  width: 0%;
  height: inherit;
  background: #ffb510;
  position: absolute;
  animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  display: flex;
`;

const Box = styled.div`
  width: fit-content;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 40vh;
  background: #fdfdfd;

  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 940px) {
    height: 25vh;
  }
`;

const Title = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
`;

const Heading = styled.div`
  font-weight: 500;
  color: #000;
  font-size: 64px;
  -webkit-animation: mainFadeIn 2s forwards;
  -o-animation: mainFadeIn 2s forwards;
  animation: mainFadeIn 2s forwards;
  animation-delay: 1.6s;
  opacity: 0;
  display: flex;
  align-items: baseline;
  position: relative;

  & span {
    width: 0px;
    height: 0px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    background: #e21b6c;
    -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    animation-delay: 2s;
    margin-left: 5px;
    margin-top: -10px;
    position: absolute;
    bottom: 13px;
    right: -12px;
  }
`;

const Role = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-top: 10px;
`;

const RoleBlock = styled.div`
  width: 0%;
  height: inherit;
  background: #e91e63;
  position: absolute;
  animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 2s;
  display: flex;
`;

const Platform = styled.p`
  animation: secFadeIn 2s forwards;
  animation-delay: 3.2s;
  opacity: 0;
  font-weight: 400;
  font-family: "Lato";
  color: #000;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 5px;
`;
