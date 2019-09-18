import React from 'react';
import Property from '../../components/Property';

const MyProperties = ({ properties }) => {
  const PropertyCards = properties.map((property, index) => (
    <Property
      property={property}
      cardSize='property-item col-md-6 col-12 mb-40'
      key={index}
    />
  ));
  return (
    <>
      <div id='properties-tab' class='tab-pane'>
        <div class='row'>{PropertyCards}</div>
      </div>
    </>
  );
};

export default MyProperties;
