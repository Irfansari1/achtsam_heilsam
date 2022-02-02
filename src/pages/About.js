import { Nav, Col, Row, Container } from "react-bootstrap";
import Renate from "../assets/Renate1.jpg";
import { useNavigate } from "react-router-dom";
const About = () => {
  const clickHandler = (eventKey) =>
    eventKey === "startseite" ? navigate("/") : navigate(`/${eventKey}`);

  const navigate = useNavigate();
  return (
    <Container className="text-links mt-4">
      <Row xs={1} md={1}>
        {/* <Col className="d-flex align-item-center justify-content-center"></Col> */}
        <Col>
          <img
            src={Renate}
            alt=""
            className="m-4"
            style={{ float: "left", borderRadius: "10px" }}
          />
          <h1>Renate Buchwald</h1>
          <p>
            1961 geboren in Weimar, Dipl.-Sozialarbeiterin
            Selbsterfahrungsseminare zu Beginn der 80er Jahre sowie Fasten- und
            Meditationpraxis ab 1991 veränderten meinen Lebensweg sehr. Mit
            Rebirthing gelang es mir, meinen langen Krankhausaufenthalt als
            Kleinkind und die damit einhergehenden Traumata anzuschauen und zu
            verarbeiten. Mitte der 90er Jahre begann ich unterschiedliche
            Ausbildungen, so z.B. in Gestalt- und Reinkarnationstherapie zu
            absolvieren. Schamanische Arbeit sowie die Ausbildung in
            Rebirthing-Transformationsarbeit vertieften mein spirituelles Wissen
            & Fühlen.
          </p>
          <h1>Mein Anliegen</h1>
          <p>
            Den Raum zum Heilen tragen wir alle in uns: Unseren Wesenskern.
            Unsere Seele. Unser ICH. Unser Selbst. Zwiebelschalenartig ist
            dieser „Diamant“, dieser „Kristall“ in uns eingehüllt in
            Erfahrungen, Prägungen, Überzeugungen – allem, was wir ein Leben
            lang bzw. viele Leben lang in uns und um uns angesammelt haben, was
            sich Schicht für Schicht abgelagert hat. Vieles davon führt zu
            Missstimmungen, Blockaden im Energiefluss, zu Störungen, Negativität
            und Krankheit. Wenn Sie bereit sind, sich mit diesen Schichten
            auseinanderzusetzen und von denen zu befreien, die Sie loslassen
            wollen, aktivieren Sie ihre Selbstheilungskräfte, um sich innerlich
            & energetisch zu reinigen, um Ihr Innerstes Selbst zum Leuchten zu
            bringen. Auf diesem Weg begleite ich Sie gern. Unser Körper mit
            seiner Vielfalt an Ausdruck ist eine Tür dazu, unsere Gefühle eine
            weitere, unsere Seele und unser Geist ebenso. Für jedes Individuum
            gibt es eigene Pforten zu durchschreiten – so unterschiedlich kann
            auch der Weg sein. Doch wie schön ist es, nach dem Abstreifen einer
            „Zwiebelschale“ Lebensfreude zu spüren, inneren Frieden oder
            Selbstannahme und -liebe. Schwerpunkte meiner Arbeit heute sind:
          </p>
          <Nav onSelect={clickHandler}>
            <ul>
              <li>
                <Nav.Link eventKey="familien">
                  Familienstellen & Systemische Aufstellungen
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey="einzel">
                  Rückführungen, Reinkarnationstherapie
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey="einzel">
                  Voice-Dialogue, EFT, Rituale
                </Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey="einzel">Individuelle Begleitung</Nav.Link>
              </li>
              <li>
                <Nav.Link eventKey="hochzeit">Hochzeitszeremonien</Nav.Link>
              </li>
            </ul>
          </Nav>
          <p>
            In der „Individuellen Begleitung“ arbeite ich je nach Person,
            Stimmung, Verfassung & Lebensumständen mit vorgenannten Methoden,
            EFT und Ansätzen aus Gestalttherapie, Ritual- und schamanischer
            Arbeit. Mit ganzem Herzen stehe ich als Begleiterin für Menschen zur
            Verfügung, die bereit sind, sich mit sich selbst
            auseinanderzusetzen, Verantwortung für sich & ihr Leben zu
            übernehmen, offen sind für Veränderungen.
          </p>
          <h1>Qualifikationen und Ausbildungen</h1>
          <p>
            Ich danke meinen Lehrerinnen und Lehrern, bei denen ich viel über
            mich und die Methoden, die ich heute anwende, gelernt habe.
          </p>
          <ul>
            <li>Diplom-Sozialarbeit, 1984 – 1989 / FH Berlin</li>
            <li>
              Kommunikationsweiterbildung & Einführung in Eutonie, 1989 – 1991 /
              Berlin bei Jutta Malcher/Diplomsupervisorin, Sr. Irmgardis
              Michels/OSF
            </li>
            <li>
              Heilfastenweiterbildung, 1991/1994 bei Christoph Michl, Martha
              Meutes
            </li>
            <li>
              Meditationspraxis, ab 1992 bei Wilma Alfs, Beatrice Grimm,
              Willigis Jäger / St. Benedikthaus Würzburg / Benediktushof
              Holzkirchen
            </li>
            <li>
              Holotropes Atmen & Enlightment intensiv, 1992 – 1998 bei Martha
              Meutes /Gossenberg Heilende Hände, 1994 / 2010 bei Maria Werner
              /Leipzig bei Luise Prodinger /St. Benedikthaus Würzburg bei Anne
              Höfler /St. Benedikthaus Würzburg
            </li>
            <li>
              Gestaltarbeit nach Fritz Perls, 1995 - 1996 bei Heide Anne
              Köllermann, Dana Wittlin Hoffmann / Lehrtherapeutinnen des
              Fritz-Perls-Institutes Düsseldorf
            </li>
            <li>
              Mikrokosmoswork / Rückführungen / Reinkarnationsarbeit, 1996 –
              1998 bei Basir Roland Werner / Kirchberg-Hornberg
            </li>
            <li>
              Familienstellen - Aufstellungsarbeit, ab 1998 bei
              unterschiedlichen Aufstellungsleitern/Assistenz
            </li>
            <li> Schamanismus, 2001 - 2002 bei Manuela Ziemann /Detmold</li>
            <li> Shin Tai, 2004 – 2005 bei Veronika Mager / Groß Chüden</li>
            <li> Kinesiologie, 2004 - 2005 bei Silvia Astfalk / Berlin</li>
            <li>
              {" "}
              Atemtherapie – Rebirthing - Breathconnection /
              Transformationsarbeit, Voice-Dialog, EFT, 2004 – 2007 bei Nemi
              Nath / Direktorin of Breathconnection Australien
            </li>
            <li>
              {" "}
              Kursleitung Progressive Muskelentspannung nach Jacobson, 2006 bei
              Sabine Söllner, Kassel / Bernd-Blindow-Schulen
            </li>
            <li>
              {" "}
              Familienstellen - Aufstellungsarbeit, 2010-2011 bei Dr. Renate
              Wirth / Berlin
            </li>
          </ul>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default About;
