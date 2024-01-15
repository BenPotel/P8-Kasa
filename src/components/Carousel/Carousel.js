import React, { useState } from "react";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import "./carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carrousel_container">
      {images && images.length > 0 && (
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      )}
      <div>
        <img className="left_arrow" src={leftArrow} onClick={prevSlide} />
        <img className="right_arrow" src={rightArrow} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
