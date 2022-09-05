import logo from "../../images/github.png";

function Header() {
  return (
    <div className="header">
      <div className="header-sub">
        <a href="https://github.com/jedwards2">
          <img src={logo} alt="hi" width="25px" height="25px" />
        </a>
        <h4>Jack Edwards</h4>
      </div>
      <div className="header-sub">
        <h4>About</h4>
        <h4>Projects</h4>
        <h4>Resume</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
}

export default Header;
