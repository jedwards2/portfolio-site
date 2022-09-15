function ProjectBlock({ project }) {
  let techs = project.tech.map((tech) => {
    return <div>{tech}</div>;
  });

  return (
    <div className="project--block">
      <div className="project--left">
        <a href={project.link}>{project.title}</a>
        {project.description}
        <p>Technologies used: {techs}</p>
      </div>
      <div className="project--right">
        <a href={project.link}>
          <img src={project.image} alt="project-img" />
        </a>
      </div>
    </div>
  );
}

export default ProjectBlock;
