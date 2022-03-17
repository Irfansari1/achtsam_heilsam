import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import angebotData from "../../data/angebotData.js";

const Sliders = () => {
  const [myData, setMyData] = useState(angebotData);

  return (
    <div>
      <Carousel fade autoPlay={true} interval={5000}>
        {myData.map((data) => {
          return (
            <Carousel.Item key={data.id}>
              <img
                className="d-block w-100"
                src={data.imageurl}
                alt="First slide"
              />
              <Carousel.Caption>
                <div
                  style={{
                    backgroundColor: "white",
                    opacity: "0.7",
                    borderRadius: "20px",
                  }}
                >
                  <p style={{ color: "black", fontSize: "1.2em" }}>
                    {data.text}
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Sliders;
