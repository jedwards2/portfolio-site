import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick(e) {
    e.preventDefault();
    console.log(theme);
    setTheme((prevTheme) => !prevTheme);
  }

  return (
    <div className="header">
      <div className="header-sub">
        <a href="https://github.com/jedwards2">
          <img
            src="/portfolio-site/images/github.png"
            alt="github link"
            width="25px"
            height="25px"
          />
        </a>
        <h4>Jack Edwards</h4>
      </div>
      <div className="header-sub">
        {pathname !== "/portfolio-site" && (
          <NavLink to="/portfolio-site">About</NavLink>
        )}
        {pathname !== "/projects" && <NavLink to="/projects">Projects</NavLink>}
        {pathname !== "/resume" && <NavLink to="/resume">Resume</NavLink>}
        {pathname !== "/contact" && <NavLink to="/contact">Contact</NavLink>}
        <button type="button" onClick={(e) => handleClick(e)}>
          {theme ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}

export default Header;
