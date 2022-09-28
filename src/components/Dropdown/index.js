import "./dropdown.css";

function Dropdown({ switchMain, setDropdown }) {
  function handleNav(e, location) {
    e.preventDefault();
    switchMain(location);
    setDropdown(false);
  }

  return (
    <div className="dropdown--main">
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
  );
}

export default Dropdown;
