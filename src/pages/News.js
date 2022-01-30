import { Col, Row, Container, Button } from "react-bootstrap";
import ubuntu from "../img/ubuntu.png";
import corona from "../img/corona.png";

const News = () => {
  return (
    <Container className="text-left mt-4">
      <Row>
        <Col>
          <h1 style={{ textAlign: "center" }}>UBUNTU (Zulu)</h1>
          <br />
          <h3>
            Menschlichkeit, Gemeinsinn, grundlegende Gutheit, Verbundenheit
          </h3>
          <br />
          <p>
            <img
              src={ubuntu}
              alt="ubuntu bewegung"
              className="rounded"
              style={{ float: "left", borderRadius: "10px" }}
            />
            Ein afrikanischer Stamm nimmt ein Stammesmitglied, das etwas
            Verletzendes oder Falsches getan hat in die Mitte, und erzählt ihm 2
            Tage lang alles Gute, was er je getan hat. Sie glauben, dass jeder
            Mensch im Grunde gut ist und sich Sicherheit, Liebe, Frieden und
            Glück wünscht. Seine Missetat ist nur ein Hilferuf. Auf diese Weise
            verbinden sie ihn wieder mit seiner wahren Natur. Er kann erkennen,
            wie er sich von der Wahrheit vorübergehend getrennt hatte und sich
            wieder erinnern, wer er wirklich ist. Ein Anthropologe bot Kindern
            in einem afrikanischen Stamm ein neues Spiel an. Er stellte einen
            Korb voller Obst in die Nähe eines Baumes ab und sagte ihnen: „Wer
            zuerst dort ist, gewinnt die süßen Früchte.“ Als er ihnen das
            Startsignal gab, nahmen sie sich gegenseitig an den Händen und
            liefen alle zusammen, setzen sich dann zusammen hin und genossen
            ihre Leckereien. Als er sie fragte, warum sie so gelaufen sind, wo
            doch jeder die Chance hatte, die Früchte für sich selbst allein zu
            gewinnen, sagten sie: „Ubuntu – wie kann einer von uns froh sein,
            wenn all die anderen traurig sind?“ - Verfasser unbekannt - Links zu
            Ubuntu-Webseiten
          </p>
          <Button
            href="https://www.ubuntu.vision/390/ubuntu-germany/warum-ubuntu-bewegung"
            target="_blank"
            rel="noreferrer"
          >
            Ubuntu Bewegung
          </Button>{" "}
          <Button
            href="https://www.youtube.com/watch?v=O7WNhGnW-IM"
            target="_blank"
            rel="noreferrer"
          >
            Interview Ubuntu
          </Button>
        </Col>
        {/* <Col className="d-flex align-item-center justify-content-center">
          <img src={ubuntu} alt="ubuntu bewegung" className="rounded" />
        </Col> */}
      </Row>
      <hr />
      <Row>
        <Col>
          <h1 style={{ textAlign: "center" }}>Corona</h1>
          <br />

          <p>
            <img
              src={corona}
              alt="corona"
              className="rounded"
              style={{ float: "right", borderRadius: "10px" }}
            />
            Den folgenden Text von Unbekannt bekam ich zugeschickt und mag ihn
            hier gern mit Euch allen teilen: <br />
            <b>"Lieber Ungeimpfter, lieber Geimpfter, Lieber Mitmensch!</b> Wann
            ist dieser Graben zwischen uns eigentlich so groß geworden? Wann
            haben wir eine vernünftige Streitkultur verlernt, ohne den anderen
            in eine Schublade zu stecken? Lieber Ungeimpfter, vielleicht ist
            dein Mitmensch geimpft, weil…
            <br />
            <ul
              style={{
                display: "block",
                align: "left",
                textAlign: "left",
              }}
            >
              <li>er jemanden wegen Corona verloren hat?</li>
              <li>er seine Liebsten schützen möchte?</li>
              <li>er Angst vor Corona hat?</li>
              <li>er sonst seinen Job verloren hätte?</li>
              <li>er wieder ein halbwegs normales Leben zurück möchte?</li>
            </ul>
            Lieber Geimpfter, vielleicht ist dein Mitmensch nicht geimpft, weil…{" "}
            <br />
            <ul
              style={{
                display: "block",
                align: "left",
                textAlign: "left",
              }}
            >
              <li>
                er aus gesundheitlichen Gründen nicht geimpft werden kann?
              </li>
              <li>er Angst vor den Nebenwirkungen hat?</li>
              <li>
                er vielleicht jemanden wegen den Nebenwirkungen verloren hat?
              </li>
              <li>
                er dich lieber auf anderen Wegen schützt (Abstand bei
                Krankheit)?
              </li>
              <li>
                er durch den zunehmenden gesellschaftlichen Druck misstrauisch
                ist?
              </li>
            </ul>
            Möchtest du, dass dein Kind/Enkelkind in einer Welt voller Hass und
            Ausgrenzung aufwächst? Möchtest du dass all deine Freundschaften
            zerbrechen, weil ihr nicht derselben Meinung seid? Möchtest du
            deinem Nachbarn voller Missachtung entgegen treten, weil er andere
            Ängste hat? Hört auf, euch gegenseitig als Schlafschafe,
            Coronajünger, Verschwörungs-theoretiker oder Querdenker zu
            beschimpfen. Hört euch die Gegenseite an und versucht, die
            Beweggründe des Anderen zu verstehen. Ausgrenzung wird uns nicht
            helfen! Bitte denkt an die Zeit vor Corona zurück und haltet endlich
            zusammen, egal welche Meinung ihr habt. Nur gemeinsam bewältigen wir
            diese Zeit!!!" Hinzufügen möchte ich noch, dass wir alle aufgerufen
            sind, unser Bewusstsein zu erweitern und unser inneres LICHT
            leuchten zu lassen. Indem wir aus dem Herzen agieren und aufhören,
            Menschen mit anderer Meinung & Sicht zu ver-urteilen, gehen wir
            Schritte in diese Ausrichtung. Sei auch Du dabei! Gemeinsam können
            wir mit der friedvollen, liebenden Kraft in uns eine NEUE ERDE
            kreieren - das große gemeinsame WIR.
          </p>
        </Col>
        {/* <Col className="d-flex align-item-center justify-content-center">
          <img src={corona} alt="corona" className="rounded" />
        </Col> */}
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default News;
