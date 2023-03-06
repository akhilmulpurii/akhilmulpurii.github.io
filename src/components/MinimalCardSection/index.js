import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

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
        padding={"8rem"}
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
        <img src={imageUrl} alt={"design"} />
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
      order: ${order};
    `};

  width: 50vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({ padding }) => padding || 0};
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 50vh;
  }

  & h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 200;
    line-height: 1.4em;
    letter-spacing: 0.02em;
    word-wrap: break-word;
  }

  & h4 {
    margin-top: 1rem;
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4em;
    letter-spacing: 0.01em;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
