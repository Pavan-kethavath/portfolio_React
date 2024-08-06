import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Technologies: {project.technologies.join(', ')}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard;
