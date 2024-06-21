import React from "react";
import "../../../App.css";
import "../Info/Info.css";
// import { showSlider } from "../Info/Info.js";
import Carousel from "./Carousel";
import { gymSections } from "./Data";
import Footer from "../../Footer.jsx";

export const Info = () => {
  return (
    <>
      <div className="Info">
        <div className="topContent">
          <h2>Get to know our gym</h2>
          {/* <p>After you Like &amp; Subscribe!</p> */}
        </div>
        {/* Carousel */}
        <Carousel images={gymSections} />
      </div>
      <Footer />
    </>
  );
};
