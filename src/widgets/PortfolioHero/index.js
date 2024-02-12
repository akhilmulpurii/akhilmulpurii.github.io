import React from "react";
import styled from "styled-components";

export default function PortfolioHero() {
  return (
    <Section>
      <Grid>
        <NameContainer>
          <Name>
            Hey, I'm
            <br />
            Sai Akhil Mulpuri
          </Name>
          <Heading>
            Expert in Designing Tomorrow's Digital Experiences Today
          </Heading>
          <Bio>
            As a seasoned front-end developer, I bring extensive expertise in
            technologies like ReactJs, React Native, Flutter, and VueJs. My
            passion lies in crafting user-friendly websites and web apps. I
            derive joy from imparting coding knowledge to others. Additionally,
            I specialize in animating and styling using CSS, as well as
            leveraging frameworks such as Lottie and styled-components. In
            recent projects, I've focused on building web apps with React and
            mobile apps with React Native, utilizing providers like Firebase and
            Netlify for seamless deployment.
          </Bio>
        </NameContainer>
      </Grid>
      <ImageContainer>
        <BGImage alt="akhil" src={"/images/focused.jpeg"} />
        <ImageOverlay />
      </ImageContainer>
    </Section>
  );
}

const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #c04848; /* fallback for old browsers */
  background: linear-gradient(
    rgb(12, 13, 14, 0.7),
    rgb(15, 16, 17, 0.7)
  ); /* Chrome 10-25, Safari 5.1-6 */
`;

const ImageContainer = styled.div`
  @media only screen and (max-width: 992px) {
    margin-top: 24px;
    width: calc(100vw + 20px);
  }
  @media only screen and (min-width: 992px) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40vw;
  }
`;

const BGImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Bio = styled.p`
  color: #bebebe;
  line-height: 1.8;
  margin-top: 30px;

  @media only screen and (max-width: 992px) {
    width: 80vw;
    font-size: 12px;
    text-align: center;
  }
  @media only screen and (min-width: 992px) {
    column-count: 2;
    column-gap: 24px;
    width: 40vw;
  }
`;

const Grid = styled.div`
  z-index: 1;
  @media only screen and (max-width: 992px) {
    display: flex;
  }
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 4fr 1fr;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 992px) {
    height: auto;
    padding: 16px;
  }
  @media only screen and (min-width: 992px) {
    height: 100vh;
    padding: 32px;
  }
`;

const NameContainer = styled.div`
  position: relative;
  justify-self: center;
  align-self: center;
  @media only screen and (max-width: 992px) {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Name = styled.h2`
  font-family: "Reenie Beanie", cursive;
  color: #ffc300;
  @media only screen and (max-width: 992px) {
    font-size: 18px;
    text-align: left;
    align-self: flex-start;
    transform: rotate(-10deg);
  }
  @media only screen and (min-width: 992px) {
    position: absolute;
    font-size: 32px;
    transform: rotate(-10deg) translate(-30px, -60px);
  }
`;

const Heading = styled.h1`
  font-family: "Protest Strike", sans-serif;
  @media only screen and (max-width: 992px) {
    font-size: 2rem;
    text-align: center;
  }
  @media only screen and (min-width: 992px) {
    font-size: 4rem;
    width: 60vw;
  }
`;
