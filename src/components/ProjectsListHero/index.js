import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// markup
const ProjectsListHero = () => {
  return (
    <Section
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0 }}
    >
      <div className="arrow arrow--top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="270.11"
          height="649.9"
          overflow="visible"
        >
          <g className="item-to bounce-1">
            <path
              className="geo-arrow draw-in"
              d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
            />
          </g>
          <circle
            className="geo-arrow item-to bounce-2"
            cx="194.65"
            cy="69.54"
            r="7.96"
          />
          <circle
            className="geo-arrow draw-in"
            cx="194.65"
            cy="39.5"
            r="7.96"
          />
          <circle
            className="geo-arrow item-to bounce-3"
            cx="194.65"
            cy="9.46"
            r="7.96"
          />
          <g className="geo-arrow item-to bounce-2">
            <path
              className="st0 draw-in"
              d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552"
            />
          </g>
        </svg>
      </div>
      <div className="arrow arrow--bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.35"
          height="649.9"
          overflow="visible"
        >
          <g className="item-to bounce-1">
            <circle
              className="geo-arrow item-to bounce-3"
              cx="15.5"
              cy="580.36"
              r="7.96"
            />
            <circle
              className="geo-arrow draw-in"
              cx="15.5"
              cy="610.4"
              r="7.96"
            />
            <circle
              className="geo-arrow item-to bounce-2"
              cx="15.5"
              cy="640.44"
              r="7.96"
            />
            <g className="item-to bounce-2">
              <path
                className="geo-arrow draw-in"
                d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="main">
        <div className="main__text-wrapper">
          <h1 className="main__title">My Portfolio</h1>
          <h2>Fast. Clean. Productive.</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dotted-circle"
            width="352"
            height="352"
            overflow="visible"
          >
            <circle
              cx="176"
              cy="176"
              r="174"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-dasharray="12.921,11.9271"
            />
          </svg>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsListHero;

const Section = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(65vh);
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 300;
  overflow: hidden;
  color: white;
  text-align: center;
`;
