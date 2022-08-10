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

  if (!Array.isArray(SliderData) || length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      {/* onClick={prevSlide}  onClick={NextSlide}*/}
      <KeyboardDoubleArrowLeftIcon className="left-arrow" onClick={prevSlide} />
      <KeyboardDoubleArrowRightIcon
        className="right-arrow"
        onClick={NextSlide}
      />

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <div
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                className="image"
              >
                {/* update content */}
                <div className="imgTextcontent">
                  <div className="img-left">
                    <p>{slide.subtitle}</p>
                    <h3>{slide.title}</h3>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <button>Deatils..</button>
                    </a>
                  </div>
                  <div className="img-right">
                    <div className="span">
                      <p className="topc">Hot news today</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
