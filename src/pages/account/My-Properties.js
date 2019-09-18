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

MyProperties.defaultProps = {
  properties: [
    ...new Array(4).fill({
      name: 'Friuli-Venezia Giulia',
      location: '568 E 1st Ave, Miami',
      amount: '$550',
      figure: 'M',
      decision: 'For Rent',
      image: require('../../assets/images/property/property-1.jpg'),
      id: '466928bc-d210-46ea-93b5-2269e9682dca'
    })
  ]
};
