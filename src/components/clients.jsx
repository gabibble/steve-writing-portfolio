import Image from "react-bootstrap/Image";

import logos from "../images/logos.png";
import mobileLogos from "../images/logos-mobile.png";
import "../styles/clients.css";


function Clients() {
  return (
    <>
      <h2 className="sub-heading" id="clients">
        Clients
      </h2>
      <hr className="sub-heading-divider"></hr>
      <div className="section clients">
        <Image className="clients__logos" src={logos} fluid />
        <Image className="clients__logos--mobile" src={mobileLogos} fluid />
      </div>
    </>
  );
}

export default Clients;
