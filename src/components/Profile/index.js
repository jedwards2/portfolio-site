import info from "../../info";
import ProjectBlock from "../ProjectBlock";

function Profile() {
  const projects = info.map((project) => (
    <ProjectBlock project={project} key={project.title} />
  ));

  return (
    <div className="App">
      <div className="profile--main">
        <p className="fade--in--1">
          Graduate of Ithaca College with a passion for generative electronic
          music systems and interactive web-based audio apps with intuitive
          design.
        </p>
        <h1 className="fade--in--1">Check out some of my Projects:</h1>
        <div className="fade--in--2">{projects}</div>
      </div>
    </div>
  );
}

export default Profile;
