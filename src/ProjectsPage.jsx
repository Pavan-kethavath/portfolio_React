import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'JavaScript', 'CSS'],
      link: 'https://example.com/project1',
    },
    {
      name: 'Project 2',
      description: 'Description of project 2',
      technologies: ['React', 'Node.js', 'Express'],
      link: 'https://example.com/project2',
    },
    // Add more projects here
  ];

  return (
    <div className="projectspage">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
