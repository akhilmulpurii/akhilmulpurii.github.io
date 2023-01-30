import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styled from "styled-components";

// markup
const QuickViewSection = ({ projects }) => {
  const router = useRouter();
  return (
    <motion.section
      className="quick-view-section"
      id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <div className="quick-view-grid">
        {projects
          .filter((_, i) => i < 3)
          .map((project, index) => (
            <ProjectImageContainer
              className="quick-view-grid-item"
              key={project.title}
              onClick={() => router.push(`/projects/${project.urlSlug}`)}
              title={project.title}
              style={
                project.large
                  ? {
                      gridColumn: "1/3",
                      gridRow: "1/3",
                      background: project.background,
                    }
                  : { background: project.background }
              }
              initial={{ opacity: 0, scale: 1.2, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.7 + index * 0.5,
                ease: "easeOut",
              }}
            >
              <img alt={project.title} src={project.image} />
            </ProjectImageContainer>
          ))}
      </div>
    </motion.section>
  );
};

export default QuickViewSection;

const ProjectImageContainer = styled(motion.div)`
  &:after {
    content: ${({ title }) => "'" + title + "'" || ""};
  }
`;
