import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../../index.css";
import "./header.css";

function Header({ main, switchMain, dropdown, setDropdown }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function handleClick(e) {
    e.preventDefault();
    setTheme((prevTheme) => !prevTheme);
  }

  function handleNav(e, location) {
    e.preventDefault();
    switchMain(location);
  }

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
      </div>
      <div className="header-sub">
        {windowSize.innerWidth <= 500 && (
          <div onClick={() => setDropdown((prevState) => !prevState)}>
            <img
              src={dropdown ? "/images/up.png" : "/images/down.png"}
              alt="down"
              widht="25px"
              height="25px"
            ></img>
          </div>
        )}
        {windowSize.innerWidth > 500 && (
          <div>
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
          </div>
        )}
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
