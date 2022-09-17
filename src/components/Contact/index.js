import Header from "../Header";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import "../../index.css";
import "./contact.css";

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme ? "dark" : "light"}`}>
      <Header />
      <div className="contact--div">
        <div className="contact--square">
          <h3>Github Account:</h3>
          <a href="https://github.com/jedwards2">
            <img
              src="/portfolio-site/images/github.png"
              alt="github link"
              className="contact--img"
            />
          </a>
          <h3>Email Me at: </h3>
          <p>jack.morgan.edwards@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
