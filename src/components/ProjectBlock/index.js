import "../../index.css";
import "../Projects/projects.css";

function ProjectBlock({ project }) {
  // let techs = project.tech.map((tech) => {
  //   return <div>{tech}</div>;
  // });

  return (
    <div className="block--wrapper">
      <a href={project.link}>
        <div className="project--block">
          <div className="project--left">
            <h1>{project.title}</h1>
            {project.description}
            {/* <p>Technologies used: {techs}</p> */}
          </div>
          <div className="project--right">
            <a href={project.link}>
              <img src={project.image} alt="project-img" />
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectBlock;
