import { Nav, Col, Row, Container, Button } from "react-bootstrap";
import medi2 from "../assets/medi2.jpg";
import { useNavigate } from "react-router-dom";

const Meditation = () => {
  const clickHandler = (eventKey) =>
    eventKey === "startseite" ? navigate("/") : navigate(`/${eventKey}`);

  const navigate = useNavigate();
  return (
    <Container className="d-flex text-center mt-4" style={{ height: "85vh" }}>
      <Row className=" my-auto">
        <Col>
          <h1>Meditation & Entspannung</h1>
          <br />
          <p>
            In unserem Leben werden wir oft mit Situationen konfrontiert, die zu
            Anspannung & Stress führen. Entspannungsübungen helfen uns sowohl
            unsere Muskeln als auch unser Gedankenkarussell zu entlasten und zu
            innerer Stille und meditativer Haltung zu finden. Mit geführter &
            stiller <b>Meditation</b> begleite ich Sie im Einüben, Hektik und
            Unruhe vorbeiziehen zu lassen, um in Schweigen, Stille und
            Entspannung einzutauchen. Der uns allen innewohnenden Sehnsucht nach
            Verbindung, EINSSEIN, im Einklang-Sein schenken wir Raum und
            Aufmerksamkeit. So können wir neu oder wieder lernen, diese
            Verbundenheit zu spüren. Wahrnehmen, was ist – nur dem Atem folgen,
            der Stille, der Ruhe. Die hauptsächlich in der VHS angebotenen Kurse
            für Entspannung beinhalten u.a. die leicht erlernbare Methode der
            Progressiven Muskel-Entspannung nach Jacobson. Bei regelmäßiger
            Übung können z.B. Stressreduktion, Abbau von Ängsten und
            Schlafstörungen erfolgreiche Ergebnisse dieses Trainings sein, das
            zu Hause gut weitergeübt und in den Alltag integriert werden kann.
            <b>Entspannung</b> bedeutet etwas anderes als Trägheit. Entspannung
            – auch in der Bewegung – will gelernt sein. In diesem
            Entspannungstraining wird neben der Entspannung nach Jacobson auch
            mit Bewegungs- und Visualisationselementen gearbeitet. Der Kurs ist
            von den Krankenkassen anerkannt. Termine unter:
          </p>

          <Nav className="justify-content-center" onSelect={clickHandler}>
            <Nav.Link eventKey="seminare">
              <Button variant="outline-primary">Seminar/Kurse</Button>
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="d-flex align-item-center justify-content-center">
          <img src={medi2} alt="leaves" className="rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default Meditation;
