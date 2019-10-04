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
            <img src={property.images[0]} alt="property_banner" />
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
                {property.name}
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
              <span className="price">
                {/* {property.amount} */}
                2000
                <span>{`${property.payment_duration} ${
                  +property.payment_duration > 2 ? "Yrs" : "Year"
                }`}</span>
              </span>
              <span className="type">For Sale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
