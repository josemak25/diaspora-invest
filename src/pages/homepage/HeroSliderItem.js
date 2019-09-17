import React from 'react';
import { Link } from 'react-router-dom';

const HeroSliderItem = ({ property, propertyFeatures }) => {
  return (
    <div className="hero-item" style={{ backgroundImage: `url(${property.image})` }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-property-content text-center">
              <h1 className="title">
                <Link
                  to={{
                    pathname: `/property/${property.id}`,
                    state: property
                  }}
                >
                  {property.name}
                </Link>
              </h1>
              <span className="location">
                <img src={require('../../assets/images/icons/hero-marker.png')} alt="" />
                {property.locationName}
              </span>
              <div className="type-wrap">
                <span className="type">{property.decision}</span>
                <span className="price">
                  {property.amount} <span>{property.figure}</span>
                </span>
              </div>
              <ul className="property-feature">
                {propertyFeatures.map((feature, index) => (
                  <li key={index}>
                    <img
                      src={require(`../../assets/images/icons/${feature.icon}`)}
                      alt="latest_icon"
                    />
                    <span className="area">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderItem;

HeroSliderItem.defaultProps = {
  propertyFeatures: [
    {
      icon: 'hero-area.png',
      name: '550 SqFt'
    },
    {
      icon: 'hero-bed.png',
      name: '6 Bed'
    },
    {
      icon: 'hero-bath.png',
      name: '4 Bath'
    },
    {
      icon: 'hero-parking.png',
      name: '3 Garage'
    }
  ]
};
