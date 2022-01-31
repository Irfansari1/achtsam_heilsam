import { Col, Row, Container } from "react-bootstrap";
import contact from "../img/contact.jpg";
import Renate2 from "../img/Renate2.jpg";

const Kontakt = () => {
  return (
    <Container className="text-center mt-4">
      <Row>
        <Col>
          <img
            src={Renate2}
            alt="renate buchwald"
            className="m-4"
            style={{
              //float: "left",
              borderRadius: "10px",
              display: "inline-block",
            }}
          />
          <h1>Kontakt</h1>
          <h4>Praxis für ganzheitliche Lebensweise</h4>
          <div className="col">
            <h4>So erreichen Sie mich</h4>
            <br />
            <ul className="list-unstyled">
              <li>Marktstraße 14</li>
              <li>99423 Weimar</li>
              <li>mail@achtsam-heilsam.de</li>
              <li>03643 49 09 86</li>
            </ul>
          </div>
        </Col>
        <Col className="d-flex align-item-center justify-content-center">
          <img src={contact} alt="kontakt" className="rounded" />
          <br />
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Kontakt;
