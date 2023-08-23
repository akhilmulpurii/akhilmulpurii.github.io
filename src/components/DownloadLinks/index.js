import { motion } from "framer-motion";
import * as React from "react";
import styled, { css } from "styled-components";

const DownloadLinks = ({
  background,
  web_url,
  appstore_url,
  playstore_url,
}) => {
  return (
    <Container
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
      background={background}
    >
      <Wrapper>
        <Text
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          Want to check out the app? Use the links below!
        </Text>
        <ButtonContainer>
          {!!web_url && (
            <WebButton href={web_url}>
              <div className="small">Check out the</div>
              <div className="large">Web Application</div>
            </WebButton>
          )}
          {!!appstore_url && (
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href={appstore_url}
            >
              <StoreBadge src={"/images/appstore-badge.png"} />
            </a>
          )}
          {!!playstore_url && (
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href={playstore_url}
            >
              <StoreBadge src={"/images/playstore-badge.png"} />
            </a>
          )}
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default DownloadLinks;

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
  justify-content: center;
  align-items: center;
  padding: 36px;
  flex-direction: column;
`;

const Text = styled(motion.div)`
  color: #030d03;
  font-size: 18px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const WebButton = styled.a`
  text-decoration: none;
  color: white;
  background-color: #000;
  font-weight: 600;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 4px;
  height: 43.5px;
  padding: 0 20px;
  cursor: pointer;
  & .small {
    font-size: 12px;
    display: inline-block;
  }
  & .large {
    display: block;
    font-size: 14px;
  }
`;

const StoreBadge = styled.img`
  width: 150px;
  cursor: pointer;
`;
