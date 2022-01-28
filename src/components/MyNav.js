import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../img/achtsamlogo.png";
import renlogo from "../img/renlogo.png";
import { useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        style={{ position: "fixed-top" }}
        bg="light"
        expand="lg"
        onSelect={(eventKey) =>
          eventKey === "startseite" ? navigate("/") : navigate(`/${eventKey}`)
        }
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link eventKey="startseite">
              <img
                src={renlogo}
                alt="Renate Buchwald"
                style={{ width: "11rem", paddingLeft: "20px" }}
              />
              <img
                src={logo}
                alt="Achtsam & Heilsam"
                style={{ width: "11rem", paddingLeft: "20px" }}
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Angebote" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="familien">
                  Familienstellen_Aufstellungen
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="hochzeit">
                  Hochzeitszeremonien_Rituale
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="einzel">
                  Einzelarbeit
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="meditation">
                  Meditation
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="about">Über_mich</Nav.Link>
              <Nav.Link eventKey="seminare">Seminare_Kurse</Nav.Link>
              <Nav.Link eventKey="news">News</Nav.Link>
              <Nav.Link eventKey="links">Links</Nav.Link>
              <Nav.Link eventKey="kontakt">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
