import { Col, Row, Container } from "react-bootstrap";
import contact from "../assets/contact.jpg";
import Renate2 from "../assets/Renate2.jpg";

const Kontakt = () => {
  return (
    <Container className="d-flex text-center mt-4">
      <Row className="my-auto">
        <Col className="d-flex-column flex-basis-1">
          <img
            src={Renate2}
            alt="renate buchwald"
            className="m-4"
            style={{
              //float: "left",
              borderRadius: "10px",
            }}
          />
          <h1>Kontakt</h1>
          <h4>
            Praxis für ganzheitliche Lebensweise, Lebensberatung und
            Spirituell-seelische begleitung.
          </h4>
          <br />
          <br />
          <h4>So erreichen Sie mich</h4>
          <br />

          <ul className="list-unstyled">
            <li>Marktstraße 14</li>
            <li>99423 Weimar</li>
            <li>mail@achtsam-heilsam.de</li>
            <li>03643 49 09 86</li>
          </ul>
          <br />
        </Col>
        <Col className="align-item-center justify-content-center">
          <img src={contact} alt="kontakt" className="rounded" />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Kontakt;
