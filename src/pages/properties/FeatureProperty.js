import React from 'react';
import { Link } from 'react-router-dom';

const FeatureProperty = ({ property }) => {
  return (
    <div className="sidebar-property">
      <div className="image">
        <span className="type">For Sale</span>
        <Link
          to={{
            pathname: `/properties/${property.id}`,
            state: property
          }}
        >
          <img src={property.image} alt="property_image" />
        </Link>
      </div>
      <div className="content">
        <h5 className="title">
          <Link
            to={{
              pathname: `/properties/${property.id}`,
              state: property
            }}
          >
            {property.propertyTitle}
          </Link>
        </h5>
        <span className="location">
          <img src={require('../../assets/images/icons/marker.png')} alt="property_icon" />
          {property.locationName}
        </span>
        <span className="price">
          {property.amount} <span>{property.figure}</span>
        </span>
      </div>
    </div>
  );
};

export default FeatureProperty;

FeatureProperty.defaultProps = {
  property: {
    propertyTitle: 'Friuli-Venezia Giulia',
    locationName: '568 E 1st Ave, Miami',
    amount: '$550',
    figure: 'Month',
    decision: 'For Sale',
    id: '466928bc-d210-46ea-93b5-2269e9682dca',
    image: require('../../assets/images/property/sidebar-property-1.jpg')
  }
};
