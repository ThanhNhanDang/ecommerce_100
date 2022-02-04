import React from "react";
import IntroBanners from "./intro-banners/IntroBanners";
import IntroSlider from "./intro-banners/intro-slider/IntroSlider";

function Intro() {
  return (
    <div className="intro-section pt-3 pb-3 mb-2">
      <div className="container">
        <div className="row">
          <IntroSlider />
          <IntroBanners />
        </div>
      </div>
    </div>
  );
}

export default Intro;
