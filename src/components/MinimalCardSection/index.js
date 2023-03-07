import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";
import Image from "next/image";

export default function MinimalCardSection({
  backgroundColor = "#12e9ce",
  heading,
  info,
  imageUrl,
  isTwisted,
  delayAmount,
}) {
  const firstCardDelay = delayAmount + (!isTwisted ? 1 : 0.5);
  const secondCardDelay = delayAmount + (isTwisted ? 1 : 0.5);
  const { width } = useWindowSize();
  const padding = width > 600 ? "8rem" : "3rem";

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: delayAmount }}
    >
      <Card
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: firstCardDelay }}
        padding={padding}
        backgroundColor={backgroundColor}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: firstCardDelay + 0.5 }}
        >
          {heading}
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: firstCardDelay + 1 }}
        >
          {info}
        </motion.h4>
      </Card>
      <Card
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: secondCardDelay }}
        order={isTwisted ? 1 : -1}
      >
        <Image fill src={imageUrl} alt={"design"} />
      </Card>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background: ${backgroundColor};
    `};
  ${({ order }) =>
    css`
      @media only screen and (min-width: 600px) {
        order: ${order};
      }
    `};

  width: 50vw;
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({ padding }) => padding || 0};
  @media only screen and (max-width: 600px) {
    width: 100vw;
    min-height: 50vh;
  }

  & h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 200;
    line-height: 1.4em;
    letter-spacing: 0.02em;
    word-wrap: break-word;
    @media only screen and (max-width: 600px) {
      font-size: 28px;
    }
  }

  & h4 {
    margin-top: 1rem;
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4em;
    letter-spacing: 0.01em;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  & img {
    object-fit: cover;
    @media only screen and (max-width: 600px) {
      object-position: ${({ order }) => (order !== 1 ? "left" : "right")};
    }
  }
`;
