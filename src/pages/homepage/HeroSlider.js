import React from 'react';
import HeroSliderItem from './HeroSliderItem';

const HeroSlider = ({ properties }) => {
  return (
    <div className="hero-slider section">
      {properties.map((property, index) => (
        <HeroSliderItem property={property} key={index} />
      ))}
    </div>
  );
};

export default HeroSlider;
