import { motion } from "framer-motion";
import * as React from "react";
import styled, { css } from "styled-components";

const ProjectDetailsSection = ({ index, heading, caption, image }) => {
  return (
    <Container
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7 + index * 0.7 }}
      isEven={index % 2 === 0}
    >
      <Wrapper isEven={index % 2 === 0}>
        <TextSection>
          <Heading
            initial={{ opacity: 0, scale: 1.1, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1 + index * 0.7,
              ease: "anticipate",
            }}
          >
            {heading}
          </Heading>
          <Caption
            initial={{ opacity: 0, scale: 1.1, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            transition={{
              duration: 1,
              delay: 1.2 + index * 0.7,
              ease: "easeInOut",
            }}
          >
            {caption}
          </Caption>
        </TextSection>
        <Seperator />
        <ImageSection>
          {image && (
            <Image
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1.4 + index * 0.7,
                ease: "backInOut",
              }}
              src={image}
              alt="img"
            />
          )}
        </ImageSection>
      </Wrapper>
    </Container>
  );
};

export default ProjectDetailsSection;

const Container = styled(motion.section)`
  display: flex;
  width: 100%;
  min-height: 80vh;
  ${({ isEven }) =>
    !isEven &&
    css`
      background-color: #232323;
    `}
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  @media only screen and (max-width: 1440px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 940px) {
    padding: 32px 24px;
    flex-direction: column;
  }
  ${({ isEven }) =>
    !isEven &&
    css`
      flex-direction: row-reverse;
      @media only screen and (max-width: 940px) {
        flex-direction: column;
      }
    `}
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  justify-content: center;
`;

const ImageSection = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(motion.img)`
  width: 100%;
  object-fit: contain;
  border-radius: 6px;
`;

const Heading = styled(motion.h2)`
  font-size: 36px;
`;

const Caption = styled(motion.p)`
  font-size: 20px;
  margin-top: 30px;
`;

const Seperator = styled.div`
  width: 50px;
`;
