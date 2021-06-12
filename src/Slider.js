import "./App.css";
import { slider_images } from "./data";

import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const checkIndex = (number) => {
    if (number >= slider_images.length) {
      return (number = 0);
    }
    if (number < 0) {
      return (number = slider_images.length - 1);
    }
    return number;
  };
  const nextSlide = () => {
    setIndex(checkIndex(index + 1));
    console.log(index);
  };
  const prevSlide = () => {
    setIndex(checkIndex(index - 1));
    console.log(index);
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(checkIndex(index + 1));
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="slider-container">
      {slider_images.map((item, imageIndex) => {
        const { id, img } = item;
        let position = "activeSlide";
        if (
          imageIndex === index + 1 ||
          (index === slider_images.length - 1 && imageIndex === 0)
        ) {
          position = "nextSlide";
        }
        if (
          imageIndex === index - 1 ||
          (imageIndex === slider_images.length - 1 && index === 0)
        ) {
          position = "previousSlide";
        }
        return (
          <div className={position} key={id}>
            <img className={"image"} src={img} alt="" />
          </div>
        );
      })}
      <button onClick={prevSlide} className="left-btn">
        <FiChevronLeft />
      </button>
      <button onClick={nextSlide} className="right-btn">
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slider;
