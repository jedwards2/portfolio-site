import info from "../../info";
import ProjectBlock from "../ProjectBlock";

function Profile() {
  const projects = info.map((project) => (
    <ProjectBlock project={project} key={project.title} />
  ));

  return (
    <div className="App">
      <div className="profile--main">
        <p>
          Graduate of Ithaca College with a passion for generative electronic
          music systems and interactive web-based audio apps with intuitive
          design.
        </p>
        <h1>Check out some of my Projects:</h1>
        {projects}
      </div>
    </div>
  );
}

export default Profile;
