import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../../index.css";
import "./header.css";

function Header({ switchMain }) {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick(e) {
    e.preventDefault();
    setTheme((prevTheme) => !prevTheme);
  }

  function handleNav(e, location) {
    e.preventDefault();
    switchMain(location);
  }

  return (
    <div className="header">
      <div className="header-sub">
        <a href="https://github.com/jedwards2">
          <img
            src="/images/github.png"
            alt="github link"
            width="25px"
            height="25px"
          />
        </a>
        <h4>Jack Edwards</h4>
      </div>
      <div className="header-sub">
        <button type="button" onClick={(e) => handleNav(e, "ABOUT")}>
          About
        </button>
        <button type="button" onClick={(e) => handleNav(e, "PROJECTS")}>
          Projects
        </button>
        <button type="button" onClick={(e) => handleNav(e, "RESUME")}>
          Resume
        </button>
        <button type="button" onClick={(e) => handleNav(e, "CONTACT")}>
          Contact
        </button>
        <div className="header--button" onClick={(e) => handleClick(e)}>
          <img
            src={theme ? "/images/moon.png" : "/images/sun.png"}
            alt="theme"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
