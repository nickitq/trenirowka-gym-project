import React from "react";
import "../App.css";
import "../HeroSection.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./videos/gym-video-2.mp4" autoPlay loop muted />
      <h1>THE ULTIMATE TRAINING FACILITY</h1>
      <p>The magic you are looking for - is in the work you are avoiding</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/info"
        >
          INFO <i className="fa-solid fa-circle-info"></i>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/prices"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
