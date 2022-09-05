import Header from "../Header";
import ProjectBlock from "../ProjectBlock";
import info from "../../info";

function Projects() {
  const projects = info.map((project) => (
    <ProjectBlock project={project} key={project.title} />
  ));

  return (
    <div>
      <Header />
      {projects}
    </div>
  );
}

export default Projects;
