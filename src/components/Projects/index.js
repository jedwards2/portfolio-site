import Header from "../Header";
import ProjectBlock from "../ProjectBlock";
import info from "../../info";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import "../../index.css";
import "./projects.css";

function Projects() {
  const projects = info.map((project) => (
    <ProjectBlock project={project} key={project.title} />
  ));

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme ? "dark" : "light"}`}>
      <div className="projects--div">
        <Header />
        <div className="projects--main">{projects}</div>
      </div>
    </div>
  );
}

export default Projects;
