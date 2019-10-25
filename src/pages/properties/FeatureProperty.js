import React from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../../utils/formatPrice';

const FeatureProperty = ({ property }) => {
  const imageSource = property.images[Math.floor(Math.random() * property.images.length)];

  return (
    <div className="sidebar-property">
      <div className="image">
        <span className="type">For Sale</span>
        <Link
          to={{
            pathname: `/property/${property.id}`,
            state: property
          }}
        >
          <img src={imageSource} alt="property_image" />
        </Link>
        <div className="location">
          <img src={require('../../assets/images/icons/marker.png')} alt="property_icon" />
          {property.location}
        </div>
      </div>
      <div className="content">
        <h5 className="title">
          <Link
            to={{
              pathname: `/property/${property.id}`,
              state: property
            }}
          >
            {formatPrice(property)}
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default FeatureProperty;
