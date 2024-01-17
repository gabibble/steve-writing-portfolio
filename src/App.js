import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import AppNav from "./components/appnav";
import Hero from "./components/hero";
import Clients from "./components/clients";
import WritingPortfolio from "./components/writing";
import EditingPortfolio from "./components/editing";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <AppNav />
      <Container>
        {/* HERO */}
        <Hero />

        {/* CLIENTS */}
        <Clients />

        {/* WRITING */}
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
