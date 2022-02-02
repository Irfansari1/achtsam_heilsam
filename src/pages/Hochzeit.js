import { Col, Row, Container } from "react-bootstrap";
import hochzeit from "../assets/hochzeit.jpg";

const Hochzeit = () => {
  return (
    <Container className="text-center mt-4" style={{ height: "85vh" }}>
      <Row>
        <Col className="d-flex align-item-center justify-content-center">
          <div>
            <img src={hochzeit} alt="hochzeit" className="rounded" />
          </div>
        </Col>
        <Col>
          <h1>Hochzeitszeremonien & Rituale</h1>
          <p>
            Ob Hochzeitszeremonie , Übergangsrituale von einem Lebensabschnitt
            in einen neuen oder Abschiednehmen & Loslassen – Rituale stellen
            einen kraftvollen und tief wirksamen Akt dar, um einen Prozess der
            Veränderung zu bestärken, zu begrüßen, sichtbar zu machen oder
            abzuschließen. Fern jeglicher Routine sprechen sie uns in unserer
            Ganzheitlichkeit an.
          </p>
          <h3>Freie Trauung</h3>
          <p>
            Für den schönsten Tag im Leben eines Paares biete ich seit 2009 die
            Freie Trauung oder Hochzeitszeremonie an. Ganz nach den Wünschen und
            Bedürfnissen des jeweiligen Brautpaares gestalte ich eine
            individuelle Zeremonie mit Hochzeitsrede, Trauungsakt und dem
            passenden Rahmen dazu. Im ausführlichen Gespräch nehmen wir uns Zeit
            fürs Kennenlernen und alle Anliegen, so dass Sie Ihren besonderen
            Tag mit einer feierlichen, für Sie stimmigen, festlichen
            Hochzeitszeremonie begehen können. Ich freue mich auf Sie und Ihre
            <b> Freie Trauung !</b>
          </p>{" "}
          <h3>Hochzeitstage & Gespräch</h3>{" "}
          <p>
            Die Zeit vergeht und schnell zieht der Alltag ein. Sich auf den
            Hochzeitstag zu besinnen und sich Zeit zu nehmen, ist ein wertvolles
            Geschenk des Paares an sich selbst. Gern unterstütze ich Sie/Euch
            bei einem bewussten Innehalten zum 5., 10., 15., ... Hochzeitstag
            mit einer feierlichen Gestaltung, einem Gespräch oder Ritual. Auch
            Jubiläums-Hochzeitstage wie beispielsweise die Silberne Hochzeit
            geben Anlass zu einer erneuten und erneuernden Zeremonie. Manchmal
            braucht es auch ein beratendes Gespräch. Ich lade Sie/Euch herzlich
            ein, mich dafür zu kontaktieren.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hochzeit;
