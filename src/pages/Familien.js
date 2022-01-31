import { Col, Row, Container, Button, Nav } from "react-bootstrap";
import family2 from "../img/family2.jpg";
import { useNavigate } from "react-router-dom";

const Familien = () => {
  const clickHandler = (eventKey) =>
    eventKey === "startseite" ? navigate("/") : navigate(`/${eventKey}`);

  const navigate = useNavigate();
  return (
    <Container className="text-center mt-4">
      <Row>
        <Col className="d-flex align-item-center justify-content-center">
          <img src={family2} alt="seminar" className="rounded" />
          <br />
          <br />
        </Col>
        <Col>
          <h1>Aufstellungen</h1>
          <h3>Familienstellen / Aufstellungen</h3>

          <p>
            Das Aufstellen familiärer, beruflicher, persönlicher Anliegen
            schenkt uns Einblicke in bisher verborgen gebliebene Beziehungen,
            Verbindungen, Verstrickungen. Mit Hilfe von aufgestellten
            Stellvertretern wird so das tief wirkende Seelenbild eines Familien-
            oder Beziehungssystems sichtbar. Folgen wir einfühlsam den sich
            zeigenden Seelenbewegungen, zeigen sich unvorhersehbare
            Veränderungen und Lösungen. <br />
            Mit der faszinierenden Methode von Aufstellungen lassen sich die
            unterschiedlichsten Themen hin zu einer Lösung bewegen und
            unterstützen die Freilegung von ausgebremstem Potential. Anwendbar
            sind Systemische Aufstellungen bei:
          </p>
          <ul
            style={{
              display: "block",
              align: "left",
              textAlign: "left",
            }}
          >
            <li>
              häufig wiederkehrendem belastenden Verhalten, Mustern,
              Schwierigkeiten, Problemen in
              <ul>
                <li>Eltern-Kind-Beziehungen,</li>
                <li>Paar-Partnerschafts-Beziehungen,</li>
                <li>
                  dem ganzen Bereich von Herkunfts- und Gegenwartsfamilien,
                </li>
                <li>Arbeitsbeziehungen,</li>
              </ul>
            </li>
            <li>bei Symptomen auf körperlicher und emotionaler Ebene,</li>
            <li>
              bei behindernden, stagnierenden Einstellungen, Ereignissen,
              fehlender Lebensfreude,
            </li>
            <li>bei blockiertem Lebensfluss,</li>
            <li>bei spiritueller Stagnation</li>
          </ul>
          <p>
            Familienstellen & Aufstellungen sind sowohl in Einzelsitzungen als
            auch in der Gruppe möglich. Dazu bringe ich meine langjährigen
            Erfahrungen seit 1998 ein. Dauer: eineinhalb Stunden (Einzelarbeit)
            Termine Gruppenangebote zu Aufstellungen unter:
          </p>
          <Nav className="justify-content-center" onSelect={clickHandler}>
            <Nav.Link eventKey="einzel">
              <Button>Einzelarbeit</Button>
            </Nav.Link>
            <Nav.Link eventKey="seminare">
              <Button>Seminar/Kurse</Button>
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
};

export default Familien;
