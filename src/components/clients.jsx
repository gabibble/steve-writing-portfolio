import Image from "react-bootstrap/Image";

import logos from "../images/logos-dark.png";

function Clients() {
  return (
    <>
      <h2 className="sub-heading" id="clients">
        Clients
      </h2>
      <hr className="sub-heading-divider"></hr>
      <div className="section clients">
        <Image src={logos} fluid />
      </div>
    </>
  );
}

export default Clients;
