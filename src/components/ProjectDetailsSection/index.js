import { motion } from "framer-motion";
import * as React from "react";

const ProjectDetailsSection = ({ index, heading, caption, image }) => {
  return (
    <motion.section
      className="project-details-container"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7 + index * 0.7 }}
      style={
        !(index % 2 === 0)
          ? {
              backgroundColor: "#232323",
            }
          : {}
      }
    >
      <div
        style={
          !(index % 2 === 0)
            ? {
                flexDirection: "row-reverse",
              }
            : {}
        }
        className="project-details-wrapper"
      >
        <div className="project-details-text-section">
          <motion.h2
            className="project-details-heading"
            initial={{ opacity: 0, scale: 1.1, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1 + index * 0.7,
              ease: "anticipate",
            }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="project-details-caption"
            initial={{ opacity: 0, scale: 1.1, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            transition={{
              duration: 1,
              delay: 1.2 + index * 0.7,
              ease: "easeInOut",
            }}
          >
            {caption}
          </motion.p>
        </div>
        <div className="project-details-seperator" />
        <div className="project-details-image-section">
          {image && (
            <motion.img
              className="project-details-image"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1.4 + index * 0.7,
                ease: "backInOut",
              }}
              src={image}
              alt="img"
            />
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetailsSection;
