import * as React from "react";
import { motion } from "framer-motion";

// markup
const ProjectDetailsHero = ({ title, background, platform }) => {
  return (
    <motion.section
      style={{ background }}
      className="project-details-hero-section"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div class="container">
        <div class="box">
          <div class="title">
            <span class="block"></span>
            <h1>
              {title}
              <span></span>
            </h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p>{platform}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetailsHero;
