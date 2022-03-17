import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assets/achtsamlogo.png";
import { useNavigate } from "react-router-dom";
import "../navbar/MyNav.css";

//navbar content clash must be fixed!!!!!!!!!

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Navbar
          style={{ backgroundColor: "#D5D4CF" }}
          className="fixed-top border-3"
          //bg="light"
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
          <Navbar.Toggle
            aria-controls="basic-navbar-nav "
            style={{
              marginRight: "5%",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav
              className="ms-auto fs-5  "
              style={{
                marginRight: "10%",
              }}
            >
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
              <Nav.Link classsName="nav-links" eventKey="about">
                Über_mich
              </Nav.Link>
              <Nav.Link classsName="nav-links" eventKey="seminare">
                Seminare_Kurse
              </Nav.Link>
              <Nav.Link classsName="nav-links" eventKey="news">
                News
              </Nav.Link>
              <Nav.Link classsName="nav-links" eventKey="links">
                Links
              </Nav.Link>
              <Nav.Link classsName="nav-links" eventKey="kontakt">
                Kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MyNav;
