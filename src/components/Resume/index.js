import Header from "../Header";

function Resume() {
  return (
    <div>
      <Header />
      <div className="resume--header">
        <h3>Resume</h3>
        <a href="edwards_resume.zip" download>
          Download as PDF
        </a>
      </div>
    </div>
  );
}

export default Resume;
