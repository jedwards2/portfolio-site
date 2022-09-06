function ProjectBlock({ project }) {
  return (
    <div>
      <div>
        <a href={project.link}>{project.title}</a>
        {project.description}
        {project.tech}
      </div>
      <div>
        <img src={project.image} alt="honka" width="240px" height="130px" />
      </div>
    </div>
  );
}

export default ProjectBlock;
