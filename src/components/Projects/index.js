import Header from "../Header";
import ProjectBlock from "../ProjectBlock";
import info from "../../info";

function Projects() {
  const projects = info.map((project) => (
    <ProjectBlock project={project} key={project.title} />
  ));

  return (
    <div className="App">
      <div className="projects--div">
        <Header />
        <div className="projects--main">{projects}</div>
      </div>
    </div>
  );
}

export default Projects;
