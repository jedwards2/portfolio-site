import logo from "../../images/github.png";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="header">
      <div className="header-sub">
        <a href="https://github.com/jedwards2">
          <img src={logo} alt="hi" width="25px" height="25px" />
        </a>
        <h4>Jack Edwards</h4>
      </div>
      <div className="header-sub">
        {pathname !== "/" && <NavLink to="/About">About</NavLink>}
        {pathname !== "/projects" && <NavLink to="/projects">Projects</NavLink>}
        {pathname !== "/resume" && <NavLink to="/resume">Resume</NavLink>}
        {pathname !== "/contact" && <NavLink to="/contact">Contact</NavLink>}
      </div>
    </div>
  );
}

export default Header;
