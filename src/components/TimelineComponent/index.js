import * as React from "react";
import { data } from "../../components/QuickViewSection/data";
import "./styles.scss";
import { navigate } from "gatsby-link";

const { projects } = data;

export default function TimelineComponent() {
  return (
    <div id="cd-timeline" class="cd-container">
      {projects.map((project) => (
        <TimelineItem {...project} />
      ))}
    </div>
  );
}

function TimelineItem({
  title = "",
  image = "",
  technologies = [],
  description = "",
  platform = "",
  urlSlug = "",
}) {
  return (
    <div
      class="cd-timeline-block"
      onClick={() => navigate(`/projects/${urlSlug}`)}
    >
      <div class="cd-timeline-img cd-picture"></div>
      <div class="cd-timeline-content">
        <h2>{title}</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">{platform}</span>
        </div>
        <p>{description}</p>
        <ul class="content-skills">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
