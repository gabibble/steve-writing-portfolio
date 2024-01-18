import React from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function AppNav() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="sm"
      className="bg-body-tertiary"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand
          href="#"
          onClick={() => setExpanded(false)}
          className="navbar-link"
        >
          Steve Barry
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ border: "none", paddingRight: 0 }}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#writing"
              onClick={() => setExpanded(false)}
              className="navbar-link"
            >
              Writing
            </Nav.Link>
            <Nav.Link
              href="#editing"
              onClick={() => setExpanded(false)}
              className="navbar-link"
            >
              Editing
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => setExpanded(false)}
              className="navbar-link"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
