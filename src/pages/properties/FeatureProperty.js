import React from "react";
import { Link } from "react-router-dom";

const FeatureProperty = ({ property }) => {
  return (
    <div className="sidebar-property-list">
      <div className="sidebar-property">
        <div className="image">
          <span className="type">For Sale</span>
          <Link
            to={{
              pathname: `/property/${property.id}`,
              state: property
            }}
          >
            <img src={property.images[0]} alt="property_image" />
          </Link>
        </div>
        <div className="content">
          <h5 className="title">
            <Link
              to={{
                pathname: `/property/${property.id}`,
                state: property
              }}
            >
              {property.name.substr(0, 18)}...
            </Link>
          </h5>
          <span className="location">
            <img
              src={require("../../assets/images/icons/marker.png")}
              alt="property_icon"
            />
            {property.location}
          </span>
          <span className="price">{property.price}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;
