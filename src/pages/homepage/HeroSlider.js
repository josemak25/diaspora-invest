import React from "react";
import HeroSliderItem from "./HeroSliderItem";

const HeroSlider = ({ properties }) => {
  const [property] = properties;
  return (
    <div className="hero-slider section">
      <HeroSliderItem property={property} />
    </div>
  );
};

export default HeroSlider;
