import React from "react";
import MyCards from "../components/MyCards";

import linkData from "../data/linkData";

const Links = () => {
  return (
    <>
      <h1 className="text-center">Links</h1>
      <MyCards data={linkData} />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Links;

/* import { Col, Row, Container, Button } from "react-bootstrap";
import links from "../img/links.jpg";
import archiv from "../helpers/Archiv.pdf";

const Seminare = () => {
  return (
    <Container className="text-left mt-4">
      <Row>
        <Col>
          <h1>Links</h1>
          <h3>Frauen</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>

          </ul>

          <p>
            Aus aktuellen Gründen werden Gruppenangebote voraussichtlich wieder
            ab April beginnen. Telefonisch oder auf mail-Anfragen kann ich
            aktuelle Auskunft geben. Durch die äußeren Umstände werden wir alle
            auf unsere - ich nenne sie mal - unerlösten Schattenanteile
            hingestupst, mal sanfter, mal heftiger. Es geht nicht wirklich ums
            Außen in dieser WANDEL-Zeit, sondern um unsere inneren Ängste,
            Kämpfe, Ablehnungen - um das (Er-)Lösen alter Glaubenssätze,
            Überzeugungen und eingefahrener Bahnen. In den Einzelsitzungen
            begleite ich Sie/Euch weiterhin dabei.
          </p>
          <Button href={archiv} target="_blank" rel="noreferrer">
            Archiv Veranstaltungen
          </Button>
        </Col>
        <Col className="d-flex align-item-center justify-content-center">
          <img src={links} alt="seminar" className="rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default Seminare; */
