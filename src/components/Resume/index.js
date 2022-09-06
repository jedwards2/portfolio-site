import Header from "../Header";

function Resume() {
  return (
    <div>
      <Header />
      <div className="resume">
        <div className="resume--header">
          <h3>Resume</h3>
          <a href="edwards_resume.zip" download>
            Download Resume as PDF
          </a>
        </div>
        <div className="resume--main">
          <h3>Profile</h3>
          <p>
            Graduated from Ithaca College in 2021 with honors, majoring in Music
            Composition with concentrations in Music Theory and Piano.
            Compositional work focused on generative electronic music systems,
            and computer based instruments.
          </p>
          <h3>Skills</h3>
          <p>
            Javascript, Python, SQL, Git. as well as audio based applications,
            including Csound, Sonic Pi, Max/MSP, TidalCycles Lots of experience
            with web frameworks, including React and Flask, HTML, CSS,
            Bootstrap, as well as REST APIs, database management and backend
            technologies.
          </p>
          <h3>Work Experience</h3>
          <h4>Piano Teacher, LB Music School, MA -- 2021 - 2022</h4>
          <p>Taught advanced piano to learners of all ages and skill levels</p>
          <h4>Webcasting Assistant, Ithaca College, NY -- 2018 - 2020</h4>
          <p>Score reading for live performance</p>
          <h4>Cool As A Moose -- 2018 + 2019</h4>
          <p>Worked in stockroom and sales floor</p>
          <h4>Student Accompanist -- 2017 - 2021</h4>
          <p>
            Worked with up to eight vocalists on a daily basis, accompanying
            weekly lessons and rehearsals
          </p>
          <h3>Education</h3>
          <h4>
            Ithaca College, Ithaca, NY -- Music Composition, magna cum laude,
            2021
          </h4>
          <p>Concentration in Music Theory, Piano</p>
          <h3>Extracurricular</h3>
          <h4>Co-President of Opus X -- 2019 - 2021</h4>
          <p>Student-Led New Music organization at Ithaca College</p>
          <h4>Lead Student Coordinator for NSEME 2021</h4>
          <p>
            Student organizer for Student-Led New Music conference taking place
            in April 2021
          </p>
          <h4>
            Deans List- Fall 2017, 2018, 2019, 2020, Spring 2019, 2020, 2021
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Resume;
