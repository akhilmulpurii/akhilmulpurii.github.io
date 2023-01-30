import { motion } from "framer-motion";
import * as React from "react";

const TechStack = ({ technologies = [], background }) => {
  return (
    <motion.section
      className="tech-stack-container"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      style={{ background }}
    >
      <div className="tech-stack-wrapper">
        <motion.span
          className="tech-stack-title"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          TECH STACK
        </motion.span>
        {technologies.map((tech, index) => (
          <motion.div
            className="tech-stack-chip-item"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 + index * 0.3 }}
            key={tech}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
