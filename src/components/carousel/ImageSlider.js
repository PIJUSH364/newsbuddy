import React, { useState } from "react";
import "./Carousel.css";
import { SliderData } from "./SliderData";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);

  const length = SliderData.length;
  //   console.log(length);

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(SliderData) || length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      {/* onClick={prevSlide}  onClick={NextSlide}*/}
      <KeyboardDoubleArrowLeftIcon className="left-arrow" onClick={prevSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div key={index} className={index === current ? "slide active" : "slide"}>
            {index === current  &&
             ( <img
                
                src={slide.image}
                alt="carousel img1"
                className="image"
              />)
            }
          </div>
        );
      })}
      <KeyboardDoubleArrowRightIcon
        className="right-arrow"
        onClick={NextSlide}
      />
    </div>
  );
}

export default ImageSlider;
