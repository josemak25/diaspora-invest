import React from 'react';
import Property from '../../components/Property';

const ServiceSlider = ({ properties }) => {
  return (
    <div className="property-slider-2">
      {properties.map((property, index) => (
        <Property property={property} key={index} cardSize="property-2" />
      ))}
    </div>
  );
};

export default ServiceSlider;
