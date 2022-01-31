import { Col, Row, Container } from "react-bootstrap";
import medi3 from "../img/medi3.jpg";

const Seminare = () => {
  return (
    <Container className="text-center mt-4">
      <Row>
        <Col>
          <h1>Haftungshinweis & Datenschutz</h1>

          <br />
          <p>
            <b>Haftungshinweis:</b> Trotz sorgfältiger inhaltlicher Kontrolle
            übernehme ich keine Haftung für die Inhalte externer Links. Für den
            Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich. Der Inhalt dieser Website ist urheberrechtlich
            geschützt. Die Speicherung und Vervielfältigung von Bildmaterial,
            Text oder Grafiken aus dieser Website ist nicht gestattet. Für
            Schäden, die in Verbindung mit bereitgestellten Informationen dieser
            Website entstehen, hafte ich nicht.
            <br /> <b>Datenschutz:</b> Die Nutzung meiner Webseite ist ohne
            Angabe personenbezogener Daten moeglich. Alle personenbezogenen
            Daten von Ihnen verwende ich vertraulich und entsprechend der
            gesetzlichen Vorschriften. Sie dienen vorvertraglicher Maßnahmen
            bzw. der Erfüllung unseres Vertrags und werden nicht an Dritte
            weitergegeben. Nach Abschluss des Auftrags oder Beendigung der
            Arbeitsbeziehung werden diese geloescht. Gesetzliche
            Aufbewahrungsfristen bleiben unberührt. Zum Beziehen aktueller
            Informationen/ Newsletter benoetige ich Ihre E-Mail-Adresse sowie
            die Zustimmung zu deren Empfang. Weitere Daten werden nicht erhoben
            und auf Ihren Wunsch hin geloescht. Sie haben jederzeit ein Recht
            auf Berichtigung, Sperrung oder Loeschung aller personenbezogener
            Daten. Die rechtlichen Vorschriften finden Sie im (BDSG)
            Bundesdatenschutzgesetz und in der (DS-GVO)
            Datenschutz-Grundverordnung.
          </p>
        </Col>
        <Col className="d-flex align-item-center justify-content-center">
          <img src={medi3} alt="seminar" className="rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default Seminare;
