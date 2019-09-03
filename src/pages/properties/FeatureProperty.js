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
