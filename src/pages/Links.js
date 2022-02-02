import React from "react";
import MyCards from "../components/cards/MyCards";
import linkData from "../data/linkData";

const Links = () => {
  return (
    <>
      <h1 className="text-center mt-4">Links</h1>
      <MyCards data={linkData} />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Links;
