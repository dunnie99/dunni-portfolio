'use client';

import { useState } from 'react';

type Project = {
  id: string;
  label: string;
  status: string;
  ecosystem: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const detailsId = `project-details-${project.id}`;

  return (
    <article
      className={`project-card project-${project.accent}${project.accent === 'featured' ? ' featured' : ''}${isFlipped ? ' is-flipped' : ''}`}
      onClick={() => setIsFlipped((flipped) => !flipped)}
    >
      <div className="project-flipper">
        <button
          type="button"
          className="project-face project-front"
          aria-expanded={isFlipped}
          aria-controls={detailsId}
          aria-label={`${isFlipped ? 'Hide' : 'Show'} ${project.title} project details`}
        >
          <span className="project-label">{project.label}</span>
          <span className="project-number">{project.id} / 05</span>
          <span className="project-front-title">{project.title}</span>
          <span className="project-ecosystem">{project.ecosystem}</span>
          <span className="flip-hint">HOVER OR TAP TO EXPLORE</span>
        </button>
        <div className="project-face project-back" id={detailsId}>
          <div className="project-meta">
            <span>
              {project.id} — {project.status}
            </span>
            <span>{project.ecosystem}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
