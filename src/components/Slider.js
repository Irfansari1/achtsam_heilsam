import React from "react";
import { Carousel } from "react-bootstrap";
import wedding from "../img/wedding.jpg";
//import serenity from "../img/serenity.jpg";
import therapy from "../img/therapy.jpg";
import meditation from "../img/meditation.jpg";
import joy from "../img/joy.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel fade autoPlay={true} interval={5000}>
        <Carousel.Item>
          <img className="d-block w-100" src={wedding} alt="First slide" />
          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "white",
                opacity: "0.7",
                borderRadius: "20px",
              }}
            >
              <p style={{ color: "black", fontSize: "1.2em" }}>
                Neuanfänge, Übergangs- und Umbruchssituationen achtungsvoll
                würdigen durch Hochzeits-Zeremonien und Rituale
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={joy} alt="Second slide" />

          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "white",
                opacity: "0.7",
                borderRadius: "20px",
              }}
            >
              <p style={{ color: "black", fontSize: "1em" }}>
                Was ich Ihnen anbiete:
              </p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                opacity: "0.7",
                borderRadius: "20px",
              }}
            >
              <p style={{ color: "black", fontSize: "1em" }}>
                Freude und Leichtigkeit durch Auflösen bindender Verstrickungen
                und Freilegung des ureigenen Wesenskerns durch
                Familienstellen/Aufstellungen und Rückführungen
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={therapy} alt="Third slide" />
          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "white",
                opacity: "0.7",
                borderRadius: "20px",
              }}
            >
              <p style={{ color: "black", fontSize: "1.2em" }}>
                Stärkung des eigenen Potentials und der jedem Menschen
                innewohnenden Schönheit und Einmaligkeit
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={meditation} alt="Third slide" />
          <Carousel.Caption>
            <div
              style={{
                backgroundColor: "white",
                opacity: "0.7",
                borderRadius: "20px",
              }}
            >
              <p style={{ color: "black", fontSize: "1.2em" }}>
                Eintauchen in Stille und Gelassenheit, der Verbindung zu unserer
                Urquelle neu begegnen, achtsames SEIN durch Meditation
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
