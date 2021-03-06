import { Col, Row, Container, Button } from "react-bootstrap";
import seminar2 from "../assets/seminar2.jpg";
import archiv from "../helpers/Archiv.pdf";

const Seminare = () => {
  return (
    <Container fluid className="d-flex text-center mt-4">
      <Row className="my-auto xs-1">
        <Col>
          <h1>Seminare & Kurse</h1>
          <br />
          <h3>Veranstaltungen 2022</h3>
          <br />
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
          <Button
            variant="outline-primary"
            href={archiv}
            target="_blank"
            rel="noreferrer"
          >
            Archiv Veranstaltungen
          </Button>
          <br />
          <br />
        </Col>

        <Col className=" align-item-center justify-content-center">
          <img src={seminar2} alt="seminar" className="rounded" />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Seminare;
