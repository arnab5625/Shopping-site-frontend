import React, { useState } from "react";
import SliderData from "./SliderData";
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle= {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundImage:`url(${SliderData[currentIndex].url})`,
  };
  return (
    <div>
      <div style={{backgroundImage: `url(${SliderData[currentIndex].url})`}}></div>
    </div>
  );
};

export default ImageSlider;
