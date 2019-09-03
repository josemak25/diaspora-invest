import React from 'react';
import { Link } from 'react-router-dom';

const Property = ({ property, propertyFeatures }) => {
  return (
    <div className="property-item col-md-6 col-12 mb-40">
      <div className="property-inner">
        <div className="image">
          <Link
            to={{
              pathname: `/property/${property.id}`,
              state: property
            }}
          >
            <img src={property.image} alt="property_banner" />
          </Link>
          <ul className="property-feature">
            {propertyFeatures.map((feature, index) => (
              <li key={index}>
                <span className="area">
                  <img
                    src={require(`../../assets/images/icons/${feature.icon}`)}
                    alt="feature_icon"
                  />
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <div className="left">
            <h3 className="title">
              <Link
                to={{
                  pathname: `/property/${property.id}`,
                  state: property
                }}
              >
                {property.propertyTitle}
              </Link>
            </h3>
            <span className="location">
              <img src={require('../../assets/images/icons/marker.png')} alt="location_icon" />
              {property.locationName}
            </span>
          </div>
          <div className="right">
            <div className="type-wrap">
              <span className="price">
                {property.amount}
                <span>{property.figure}</span>
              </span>
              <span className="type">{property.decision}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;

Property.defaultProps = {
  propertyFeatures: [
    {
      icon: 'area.png',
      name: '550 SqFt'
    },
    {
      icon: 'bed.png',
      name: 6
    },
    {
      icon: 'bath.png',
      name: 4
    },
    {
      icon: 'parking.png',
      name: 3
    }
  ]
};
