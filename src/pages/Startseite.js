import React from "react";
import MyCards from "../components/cards/MyCards";
import Sliders from "../components/slider/Sliders";
import angebotData from "../data/angebotData";

const Startseite = () => {
  return (
    <>
      <Sliders />
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
