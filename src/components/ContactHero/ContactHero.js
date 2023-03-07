import styled from "styled-components";
import BadgePin from "../BadgePin";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <Container>
      <TextContainer>
        <Heading
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's work together!
        </Heading>
        <Caption
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Let me help you become even greater at what you do.
          <br />
          Fill out the form below and I'll get back to you as soon as possible.
        </Caption>
      </TextContainer>
      <BadgeContainer>
        <BadgePin />
      </BadgeContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 60px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Heading = styled(motion.h1)`
  font-size: 10vw;
  font-weight: 500;
`;

const Caption = styled(motion.p)`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 200;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const BadgeContainer = styled.div`
  margin-top: 5vw;
  @media (max-width: 768px) {
    justify-self: center;
    margin-top: 0;
  }
`;
