import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import data from "../../helpers/projects.json";
import Header from "../Header";

const projects = _.filter(
  data.projects,
  (project) => project.hide_home != true
);

const buttons = [
  {
    href: "/contact",
    icon: "fa fa-headset",
    title: "Contact",
  },
  {
    href: "/blogs",
    icon: "fa fa-blog",
    title: "Blog",
  },
  {
    href: "https://www.linkedin.com/in/sai-akhil-mulpuri/",
    icon: "fa-brands fa-linkedin-in",
    title: "LinkedIn",
  },
  {
    href: "https://github.com/akhilmulpurii",
    icon: "fa-brands fa-github",
    title: "GitHub",
  },
  {
    href: "#",
    icon: "fa fa-paper-plane",
    title: "Resume",
  },
];

const chips = [
  {
    background: "#58B19F",
    title: "3",
    subtitle: "Years Experience",
  },
  {
    background: "#72CCD4",
    title: "15+",
    subtitle: "Handled Projects",
  },
  {
    background: "#82A2D1",
    title: "5+",
    subtitle: "Tech Stacks",
  },
];

export default function GridHeroSection() {
  return (
    <Container>
      <Header />
      <PageSection>
        <HeroGrid>
          <GlassCard
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="div1"
          >
            <img src="/images/blurrer.png" />

            <BlurBG>
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="hero"
                >
                  Hey! I'm Akhil, a web developer with 3 years of experience
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  I care a lot about using software for positive impact, and
                  enjoy creating user-centric, delightful and human experiences.
                </motion.p>
              </div>

              <div className="navbar-inn">
                <ul>
                  {buttons.map(({ href, icon, title }, index) => (
                    <li id={`nav-${title}`} key={index}>
                      <Link href={href}>
                        <span data-hover={title}>
                          <i className={icon}></i>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurBG>
          </GlassCard>
          <Card
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            style={{
              padding: 0,
            }}
            className="div6"
          >
            <Suit src={"/images/bg.jpeg"} alt="hero" />
          </Card>
        </HeroGrid>

        <Card type="grid" style={{ marginTop: 12 }}>
          {chips.map(({ background, title, subtitle }, index) => (
            <Card
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
              key={index}
              className={`div${index + 3}`}
              style={{ padding: 0 }}
            >
              <Chip background={background}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
              </Chip>
            </Card>
          ))}
        </Card>

        <PortfolioContainer>
          {projects.map(
            (
              { urlSlug, banner_image, title, short_description, banner_color },
              index
            ) => (
              <Card
                type="square"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                key={index}
                background={banner_color}
              >
                <Flex>
                  <div>
                    <motion.h5>{title}</motion.h5>
                    <motion.h6>{short_description}</motion.h6>
                  </div>
                  <RoundedButton
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.3 },
                    }}
                    href={`projects/${urlSlug}`}
                  >
                    <img src="/images/arrow.png" />
                  </RoundedButton>
                </Flex>

                <PortfolioImage src={banner_image} alt={urlSlug} />
              </Card>
            )
          )}
        </PortfolioContainer>
      </PageSection>
    </Container>
  );
}

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const RoundedButton = styled(motion(Link))`
  width: 40px;
  height: 40px;
  background: #fff;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  text-decoration: none;
  transition: background 0.2s;
  & img {
    width: 20px;
    height: 20px;
  }
`;

const BlurBG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(230, 240, 250, 0.8);
  backdrop-filter: saturate(180%) blur(40px);
  padding: 32px;
  width: 100%;
  height: 100%;
  & h1 {
    font-weight: 600;
    font-size: 32px;
    width: 70%;
    margin-bottom: 24px;
    @media (max-width: 890px) {
      width: 100%;
    }
  }
  & p {
    width: 70%;
    font-size: 18px;
    line-height: 1.5;
    @media (max-width: 890px) {
      width: 100%;
    }
  }

  .navbar-inn {
    width: fit-content;
    text-align: center;
    & ul {
      display: inline-block;
    }
  }

  & ul {
    & li.active {
      background: #111;
      & a {
        color: #f0f0f0;
      }
    }

    & li:hover {
      width: 90px;
      background: #111;
      & a {
        color: #fff;
        & span {
          -webkit-transform: translateY(-200%);
          -moz-transform: translateY(-200%);
          transform: translateY(-200%);
          &:before {
            opacity: 1;
          }
        }
      }
    }

    & li {
      height: 40px;
      width: 40px;
      background: #fff;
      margin-right: 15px;
      float: left;
      -webkit-border-radius: 40px;
      -moz-border-radius: 40px;
      border-radius: 40px;
      -webkit-transition: width 0.3s;
      -moz-transition: width 0.3s;
      transition: width 0.3s;
      overflow: hidden;
      & a {
        color: rgba(0, 0, 0, 1);
        font-size: 16px;
        overflow: hidden;

        & span {
          display: inline-block;
          transition: opacity 0.3s ease 0s, transform 0.5s ease 0s;
          -webkit-transition: opacity 0.3s ease 0s,
            -webkit-transform 0.5s ease 0s;
          -moz-transition: opacity 0.3s ease 0s, -moz-transform 0.5s ease 0s;
          line-height: 40px;
          font-size: 14px;
          width: 100%;
          &:before {
            width: 100%;
            position: absolute;
            left: 0px;
            top: 200%;
            opacity: 0;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            content: attr(data-hover);
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  & ul > li > a {
    padding: 0;
    &:focus,
    &:hover {
      background-color: transparent;
    }
  }
`;

const GlassCard = styled(motion.div)`
  border-radius: 24px;
  position: relative;
  overflow: hidden;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-position: right;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  overflow: hidden;
  gap: 12px;
  @media (max-width: 890px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PortfolioImage = styled.img`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  left: 0;
`;

const PageSection = styled.section`
  padding: 12px;
`;

const Card = styled(motion.div)`
  background-color: #1d1b1e;
  border-radius: 24px;
  padding: 18px;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  ${({ type, background }) =>
    type == "grid"
      ? css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background-color: transparent;
          grid-gap: 12px;
          padding: 0;
          margin: 12px auto;
        `
      : type == "square" && background
      ? css`
          position: relative;
          width: 100%;
          height: calc((100vw - 36px) / 2);
          padding: 24px;
          background-color: ${background};
          @media (max-width: 890px) {
            height: calc(100vw - 24px);
          }
        `
      : css``}

  & h5 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
    color: #fff;
  }

  & h6 {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 12px;
  min-height: 50vh;
  height: 100%;

  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 12px;
    max-height: 100vh;
  }
`;

const Chip = styled.div`
  ${({ background }) => `
    background-color: ${background};
    color: #fff;
    height: 100%;
    width: 100%;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h1 {
      font-size: 64px;
      font-family: Arial, Helvetica, sans-serif;
      @media (max-width: 890px) {
        font-size: 24px;
      }
    }
    & h2 {
      font-size: 14px;
      font-weight: 600;
      @media (max-width: 890px) {
        text-align: center;
        font-size: 12px;
      }
    }
    
    `}
`;

const Suit = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
