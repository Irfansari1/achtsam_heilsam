import React from "react";
import { Carousel } from "react-bootstrap";
/* import wedding3 from "../../assets/wedding3.jpg";
import therapy from "../../assets/therapy.jpg";
import meditation from "../../assets/meditation.jpg";
import joy from "../../assets/joy.jpg"; */
//import angebotData from "../../data/angebotData";

const Sliders = (id, text, imageurl, data) => {
  const myData = { id, text, imageurl };

  return (
    <div>
      <Carousel fade autoPlay={true} interval={5000}>
        {data.map((myData) => {
          return (
            <Carousel.Item key={id}>
              <img className="d-block w-100" src={imageurl} alt="First slide" />
              <Carousel.Caption>
                <div
                  style={{
                    backgroundColor: "white",
                    opacity: "0.7",
                    borderRadius: "20px",
                    s,
                  }}
                >
                  <p style={{ color: "black", fontSize: "1.2em" }}>{text}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

/* return <div></div>; */

export default Sliders;

/* const Slider = () => {
  return (
    <div>
      <Carousel fade autoPlay={true} interval={5000}>
        <Carousel.Item>
          <img className="d-block w-100" src={wedding3} alt="First slide" />
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
          <img className="d-block w-100" src={meditation} alt="Fouth slide" />
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

export default Slider; */
