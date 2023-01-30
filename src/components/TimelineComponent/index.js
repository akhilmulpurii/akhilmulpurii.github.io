import * as React from "react";
import { data } from "../../components/QuickViewSection/data";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const { projects } = data;

export default function TimelineComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      id="cd-timeline"
      class="cd-container"
    >
      {projects.map((project, index) => (
        <TimelineItem key={index} {...project} index={index} />
      ))}
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 1.2 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 + index * 0.5, ease: "easeInOut" }}
      class="cd-timeline-block"
      onClick={() => router.push(`/projects/${urlSlug}`)}
    >
      <div class="cd-timeline-img cd-picture" />
      <div class="cd-timeline-content">
        <h2>{title}</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">{platform}</span>
        </div>
        <p>{description}</p>
        <img className="timeline-image" alt="project-logo" src={banner_image} />
        <ul class="content-skills">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
