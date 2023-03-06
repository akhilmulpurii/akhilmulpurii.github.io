import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function TimelineComponent({ projects = [] }) {
  return (
    <TimelineContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {projects.map((project, index) => (
        <TimelineItem key={index} {...project} index={index} />
      ))}
    </TimelineContainer>
  );
}

function TimelineItem({
  title = "",
  banner_image = "",
  technologies = [],
  description = "",
  platform = "",
  urlSlug = "",
  index,
}) {
  const router = useRouter();
  return (
    <TimelineItemBlock
      initial={{ opacity: 0, y: 20, scale: 1.2 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 + index * 0.5, ease: "easeInOut" }}
      onClick={() => router.push(`/projects/${urlSlug}`)}
    >
      <TimelineItemBlockImage />
      <TimelineContent>
        <h2>{title}</h2>
        <TimelineContentInfo>
          <TimelineContentInfoTitle>{platform}</TimelineContentInfoTitle>
        </TimelineContentInfo>
        <p>{description}</p>
        <TimelineImage alt="project-logo" src={banner_image} />
        <ContentSkills>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ContentSkills>
      </TimelineContent>
    </TimelineItemBlock>
  );
}

const TimelineContainer = styled(motion.div)`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  margin: 0 auto;
  background: #1a1a1a;
  padding: 60px 10%;
  border-radius: 2px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 4px;
    background: #7e57c2;
  }

  @media only screen and (min-width: 1170px) {
    &:before {
      left: 50%;
      margin-left: -2px;
    }
  }
`;

const TimelineImage = styled.img`
  width: 100%;
`;

const ContentSkills = styled.ul`
  font-size: 12px;
  padding: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & li {
    background: #3a3a3a;
    border-radius: 2px;
    padding: 20px 10px;
    color: rgba(255, 255, 255, 0.7);
    margin: 3px 2px;
    text-align: center;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TimelineContentInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  border-radius: 2px;
`;

const TimelineContentInfoTitle = styled.span`
  display: inline-block;
  background: #3a3a3a;
  padding: 5px 10px;
  border-radius: 10px;
  @media (max-width: 500px) {
    display: block;
  }
`;

const TimelineItemBlock = styled(motion.div)`
  position: relative;
  margin: 2em 0;
  cursor: pointer;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1170px) {
    margin: 4em 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &:nth-child(even) > div {
      float: right;
    }
    &:nth-child(even) > div::before {
      top: 24px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: #333c42;
    }
  }
`;

const TimelineItemBlockImage = styled.span`
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #7e57c2, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
  background: #673ab7;

  @media only screen and (min-width: 1170px) {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: 15px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
`;

const TimelineContent = styled.div`
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  background: #2a2a2a;
  border-radius: 2px;
  padding: 1em;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  & h2 {
    color: rgba(255, 255, 255, 0.9);
    margin-top: 0;
    margin-bottom: 5px;
  }
  & p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 13px;
    font-size: 0.8125rem;
    margin: 1em 0;
    line-height: 1.6;
  }
  &:before {
    content: "";
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid #333c42;
  }

  @media only screen and (min-width: 768px) {
    & h2 {
      font-size: 20px;
      font-size: 1.25rem;
    }
    & p {
      font-size: 16px;
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 1170px) {
    color: white;
    margin-left: 0;
    padding: 1.6em;
    width: 36%;
    margin: 0 5%;
    &:before {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #333c42;
    }
  }
`;
