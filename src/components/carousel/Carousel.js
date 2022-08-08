import React from "react";
import "./Carousel.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
function Carousel() {
  // const slideData=SliderData;
  return (
    <div className="carousel">
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Carousel;
