import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import banner from "../../images/banner.jpeg";

// markup
const AboutMe = () => {
  return (
    <>
      <span id="about" />
      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Wrapper>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            About me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            I’m a front-end developer with vast experience of technologies such
            as ReactJs, React Native, Flutter, VueJs & I love building
            user-friendly websites and web apps, I enjoy helping people learn
            how to code. I also really like animating and styling with CSS &
            other styling frameworks such as Lottie & styled-components. Most
            recently, I’ve been building web apps with React and mobile apps
            with React Native & use providers like Firebase and Netlify to
            deploy the apps.
            <br />
            <br /> I’m currently interested in learning more about accessibility
            and delving deeper into CSS/JS animations.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            I’m also into…
            <ul>
              <li>Scrapping the web for useful data (Legally 😛)</li>
              <li>Exploring video game development</li>
              <li>Write bots for chat apps like discord</li>
              <li>
                I'm play lots and lots of video games and i'm a spotify addict
              </li>
            </ul>
          </motion.p>
        </Wrapper>
        <BannerContainer>
          <motion.img
            initial={{ opacity: 0, y: 20, scale: 1.2 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            src={banner}
          />
        </BannerContainer>
      </Section>
    </>
  );
};

export default AboutMe;

const Section = styled(motion.section)`
  margin-top: 90px;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media only screen and (max-width: 1440px) {
    padding: 0 20px;
  }
  & p {
    font-size: 24px;
    @media only screen and (max-width: 640px) {
      font-size: 20px;
    }
  }
  ul {
    list-style-type: circle;
    @media only screen and (max-width: 640px) {
      padding-left: 20px;
    }
  }
  li {
    font-size: 20px;
    @media only screen and (max-width: 640px) {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
`;

const BannerContainer = styled.div`
  height: 70vh;
  margin-top: 100px;
  margin-bottom: 60px;
  overflow: hidden;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
