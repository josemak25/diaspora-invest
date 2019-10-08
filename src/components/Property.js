import React from "react";
import { Link } from "react-router-dom";

const Property = ({ property, cardSize }) => {
  return (
    <div className={cardSize}>
      <div className="property-inner">
        <div className="image">
          <Link
            to={{
              pathname: `/property/${property.id}`,
              state: property
            }}
          >
            <img
              src={property.images[0]}
              alt="property_banner"
              className="property-inner-image"
            />
          </Link>
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
                {property.name.substr(0, 20)}...
              </Link>
            </h3>
            <span className="location">
              <img
                src={require("../assets/images/icons/marker.png")}
                alt="location_icon"
              />
              {property.location}
            </span>
          </div>
          <div className="right">
            <div className="type-wrap">
              <span className="price">&#8358;{formartPrice(property)}</span>
              <span className="type">For Sale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;

const formartPrice = ({ price }) => {
  const money = price.split(",").join("");

  if (money.length < 7) return `${money.substr(0, 3)}K`;
  if (money.length === 7) {
    const thousand = price.split(',');
      console.log(thousand);
    if(thousand[1][0] !== '0' || thousand[1][1] !== '0')     return `${money.charAt(0)}.${money.substr(1,3)}M`;
    return `${money.charAt(0)}M`;
  }
  if (money.length > 7) return `${money.substr(0, money.length-6)}M`;
};
