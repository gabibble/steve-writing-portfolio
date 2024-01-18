// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import bels from "../images/bels.jpg";
import amwa from "../images/amwa.jpg";
import aces from "../images/aces.png";
import "../styles/credentials.css";

function Credentials() {
  return (
    <>
    <Row className="credentials mt-3">
      <Col className="credentials__col" sm="4">
        <div className="credentials__image">
          <Image src={bels} fluid />
        </div>
        <p className="credentials__text">
          Board-Certified Editor in the Life Sciences (ELS)
        </p>
      </Col>
      <Col className="credentials__col" sm="4">
        <div className="credentials__image">
          <Image src={amwa} fluid />
        </div>
        <p className="credentials__text">
          American Medical Writers Association Essential Skills Certificate
        </p>
      </Col>
      <Col className="credentials__col" sm="4">
        <div className="credentials__image">
          <Image src={aces} fluid />
        </div>
        <p className="credentials__text">Poynter ACES Certificate in Editing</p>
      </Col>
    </Row>
    </>
  );
}

export default Credentials;
