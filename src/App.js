import { useState } from "react";
import Header from "./components/Header";
import ProfileContent from "./components/ProfileContent";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [main, switchMain] = useState("ABOUT");
  const { theme } = useContext(ThemeContext);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className={`App ${theme ? "dark" : "light"}`}
      style={
        theme
          ? { backgroundImage: "url(/images/dark_back.jpg)" }
          : { backgroundImage: "url(/images/light_back.jpg)" }
      }
    >
      <Header
        main={main}
        switchMain={switchMain}
        dropdown={dropdown}
        setDropdown={setDropdown}
      />
      {dropdown && (
        <Dropdown switchMain={switchMain} setDropdown={setDropdown} />
      )}
      {main === "ABOUT" && <ProfileContent switchMain={switchMain} />}
      {main === "PROJECTS" && <Projects />}
      {main === "CONTACT" && <Contact />}
      {main === "RESUME" && <Resume />}
    </div>
  );
}

export default App;
