import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../img/achtsamlogo.png";
import { useNavigate } from "react-router-dom";

//navbar content clash must be fixed!!!!!!!!!

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Navbar
          className="fixed-top border-3"
          bg="light"
          expand="lg"
          onSelect={(eventKey) =>
            eventKey === "startseite" ? navigate("/") : navigate(`/${eventKey}`)
          }
        >
          <Navbar.Brand>
            <Nav.Link eventKey="startseite" className="bg-light rounded m-2">
              <img
                src={logo}
                alt="Achtsam & Heilsam"
                style={{
                  width: "11rem",
                  paddingLeft: "20px",
                }}
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto fs-5  ">
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
              <Nav.Link className="nav-links" eventKey="about">
                Über_mich
              </Nav.Link>
              <Nav.Link eventKey="seminare">Seminare_Kurse</Nav.Link>
              <Nav.Link eventKey="news">News</Nav.Link>
              <Nav.Link eventKey="links">Links</Nav.Link>
              <Nav.Link eventKey="kontakt">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MyNav;
