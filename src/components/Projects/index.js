import ProjectBlock from "../ProjectBlock";
import info from "../../info";
import "../../index.css";
import "./projects.css";

function Projects() {
  const projects = info.map((project) => (
    <ProjectBlock project={project} key={project.title} />
  ));

  return (
    <div className="projects--div">
      <div className="projects--header">
        <h1>Projects</h1>
        <img src="/images/max.png" alt="max-img"></img>
      </div>
      <div className="projects--info">
        <p>
          My projects use the latest technologies and intuitive design to
          deliver the best user experience possible. You can find all of the
          technologies I use commonly on my resume, but some of my favorites
          include React, Node.js, Tone.js, and Max/MSP.
        </p>
      </div>

      <div className="projects--list">{projects}</div>
    </div>
  );
}

export default Projects;
