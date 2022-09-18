import "./profile.css";
import "../../index.css";

function ProfileContent({ switchMain }) {
  return (
    <div className="profile--main">
      <div className="profile--header fade--in--1">
        <p>Hi, my name is </p>
        <h1>Jack Edwards</h1>
        <p>
          I'm a software engineer based in Philadephia specializing in building
          exceptional web applications, and everything in between.
        </p>
        <p>
          I also have a passion for generative electronic music systems and
          interactive web-based audio apps with intuitive design. Ask me about
          some of them!
        </p>
      </div>
      <button
        className="fade--in--1 contact--button"
        type="button"
        onClick={() => switchMain("CONTACT")}
        style={{ borderColor: "white" }}
      >
        Get in touch with me
      </button>

      <h1 className="fade--in--1">
        Quick links to some of my favorite Projects
      </h1>

      <div className="profile--projects--div">
        <a href="https://jedwards2.github.io/tone-physics-react/">
          <div className="profile--project--pair">
            <p>Musical Physics System</p>
            <img alt="project-img" src="/images/physics.gif"></img>
          </div>
        </a>
        <a href="https://jedwards2.github.io/note-scroller/">
          <div className="profile--project--pair">
            <p>In-Browser Sequencer</p>
            <img alt="project-img" src="/images/seq.gif"></img>
          </div>
        </a>
        <a href="https://jedwards2.github.io/automata_gen/">
          <div className="profile--project--pair">
            <p>Cellular Automata Rhythm Generator</p>
            <img alt="project-img" src="/images/auto.gif"></img>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProfileContent;
