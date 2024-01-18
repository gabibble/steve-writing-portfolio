import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <h2 className="sub-heading" id="contact">
        Contact
      </h2>
      <hr className="sub-heading-divider"></hr>
      <div className="footer section">
        <div className="footer-email mb-3">
          <h4> stephanbarry@gmail.com</h4>
          <button
            variant="outline-secondary"
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText("stephanbarry@gmail.com");
              setCopied(true);
            }}
            onPointerLeave={() => {
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            <div className="footer__email-copy">
              <FontAwesomeIcon icon={copied ? faCheck : faCopy} size="md" />
            </div>
          </button>
        </div>

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
    </>
  );
}

export default Footer;
