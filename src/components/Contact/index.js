import Header from "../Header";

function Contact() {
  return (
    <div className="App">
      <Header />
      <div className="contact--div">
        <div className="contact--square">
          <h3>Github Account:</h3>
          <a href="https://github.com/jedwards2">
            <img src="/images/github.png" alt="hi" className="contact--img" />
          </a>
          <h3>Email Me at: </h3>
          <p>jack.morgan.edwards@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
