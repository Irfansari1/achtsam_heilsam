import React from "react";
import MyCards from "../components/MyCards";
import Slider from "../components/Slider";
import angebotData from "../data/angebotData";

const Startseite = () => {
  return (
    <>
      <Slider />
      <h1 className="text-center">Angebote</h1>
      <MyCards data={angebotData} />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Startseite;
