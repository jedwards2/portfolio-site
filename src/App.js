import { useState } from "react";
import Header from "./components/Header";
import ProfileContent from "./components/ProfileContent";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function App() {
  const [main, switchMain] = useState("ABOUT");
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme ? "dark" : "light"}`}>
      <Header main={main} switchMain={switchMain} />
      {main === "ABOUT" && <ProfileContent />}
      {main === "PROJECTS" && <Projects />}
      {main === "CONTACT" && <Contact />}
      {main === "RESUME" && <Resume />}
    </div>
  );
}

export default App;
