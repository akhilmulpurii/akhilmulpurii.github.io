import * as React from "react";
import { motion } from "framer-motion";

// markup
const AboutMe = () => {
  return (
    <>
      <span id="about" />
      <motion.section
        className="about-me-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="about-me-wrapper">
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
            style={{ marginBottom: 0 }}
          >
            I’m also into…
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <li>
              Scrapping the web for useful data (Legally{" "}
              <span
                role="img"
                aria-label="emoji-smile"
                aria-labelledby="emoji-smile"
              >
                😛
              </span>
              )
            </li>
            <li>Exploring video game development</li>
            <li>Write bots for chat apps like discord</li>
            <li>
              I play lots and lots of video games and i'm a spotify addict
            </li>
          </motion.ul>
        </div>
        <div className="about-me-banner">
          <motion.img
            initial={{ opacity: 0, y: 20, scale: 1.2 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            src={"/images/banner.jpeg"}
          />
        </div>
      </motion.section>
    </>
  );
};

export default AboutMe;
