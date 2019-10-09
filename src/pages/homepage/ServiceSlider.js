import React from "react";
import Property from "../../components/Property";

const ServiceSlider = ({ properties }) => {
  if(properties.length < 1) return null;
  const property = properties[Math.floor(Math.random() * properties.length)];
  return (
    <div className="property-slider-2">
      <Property property={property} cardSize="property-2" />
    </div>
  );
};

export default ServiceSlider;
