import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import hero from "../images/hero.png";
import Credentials from "./credentials";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="section mb-4">
      <Row className="hero" id="home">
        <Col className="hero__text" sm="7" lg="8">
          <h1>Steve Barry</h1>
          <p>
            Steve is a freelance writer and editor based in Portland, Oregon. He
            has over 10 years of writing and editing experience.
          </p>
          <p>
            Steve has worked as a freelance contributor, copy editor, and
            medical editor for publications covering health, wellness, science,
            and technology. His articles have been featured in several leading
            lifestyle brands and scientific journals.
          </p>
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
          </div>
        </Col>
        <Col className="hero__image" sm="5" lg="4">
          <Image src={hero} fluid />
        </Col>
      </Row>
      <Credentials />
    </div>
  );
}

export default Hero;
