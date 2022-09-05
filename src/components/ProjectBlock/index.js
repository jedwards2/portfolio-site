function ProjectBlock({ project }) {
  return (
    <div>
      <a href={project.link}>{project.title}</a>
      {project.description}
      {project.tech}
    </div>
  );
}

export default ProjectBlock;
