import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import AppNav from "./components/appnav";
import Hero from "./components/hero";
import WritingPortfolio from "./components/writing";
import EditingPortfolio from "./components/editing";
import Footer from "./components/footer";

import logos from "./images/logos-dark.png";

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
        <EditingPortfolio />

        {/* FOOTER */}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
