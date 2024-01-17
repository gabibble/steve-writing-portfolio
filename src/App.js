import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import AppNav from "./components/appnav";
import Hero from "./components/hero";
import WritingPortfolio from "./components/writing";
import EditingPortfolio from "./components/editing";

import logos from "./images/logos-dark.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function App() {

  return (
    <div className="App">
      <AppNav />
      <Container>
        <Hero />

        {/* CLIENTS */}
        <h2 className="sub-heading" id="clients">
          Clients
        </h2>
        <hr className="sub-heading-divider"></hr>
        <div className="section clients">
          <Image src={logos} fluid />
        </div>

        {/* WRITING */}
        <h2 className="sub-heading" id="writing">
          Writing
        </h2>
        <hr className="sub-heading-divider"></hr>
        <WritingPortfolio />

        {/* EDITING */}
        <h2 className="sub-heading" id="editing">
          Editing
        </h2>
        <hr className="sub-heading-divider"></hr>
        <EditingPortfolio />

        {/* FOOTER */}
        <h2 className="sub-heading" id="contact">
          Contact
        </h2>
        <hr className="sub-heading-divider"></hr>
        <div className="footer section">
          <Button
            variant="light"
            size="lg"
            className="footer__email mb-3"
            onClick={() => {
              console.log("hi");
              navigator.clipboard.writeText("stephanbarry@gmail.com");
            }}
          >
            stephanbarry@gmail.com
            <div className="footer__email-copy">
              <FontAwesomeIcon icon={faCopy} size="sm" />
            </div>
          </Button>

          <div className="contact">
            <a
              className="contact-icon"
              href="https://www.linkedin.com/in/stevebarryeditor/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a
              className="contact-icon"
              href="mailto:stephanbarry@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a
              className="contact-icon"
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=stephanbarry@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
