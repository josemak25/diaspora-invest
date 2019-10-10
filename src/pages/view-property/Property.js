import React from "react";

import { useSelector } from 'react-redux';

import Footer from "../../common/footer/Footer";
import FeatureProperty from "../../pages/properties/FeatureProperty";
import Jumbotron from "../../common/jumbotron/Jumbotron";

const Property = props => {
  const { properties } = useSelector(({properties}) => properties);
  const property = props.location.state

  const {
    name,
    location,
    address,
    images,
    price,
    description,
    user_id,
    category_id,
    has_C_of_O,
    status,
    payment_duration,
    avg_monthly_payment
  } = property;
  
  return (
    <div id="main-wrapper">
      <Jumbotron
        origin={name}
        originTitle={address}
        path="/property/:id"
        pathTitle={location}
      />
      <div className="property-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 order-1 order-lg-2 mb-sm-50 mb-xs-50">
              <div className="row">
                <div className="single-property col-12 mb-50">
                  <div className="property-inner">
                    <div className="head">
                      <div className="left">
                        <h1 className="title">{name}</h1>
                        <span className="location">
                          <img
                            src={require('../../assets/images/icons/marker.png')}
                            alt=""
                          />
                          {address}, <b style={{marginLeft: '10px'}}>{location}</b>
                        </span>
                      </div>
                      <div className="right">
                        <div className="type-wrap">
                          <span className="price">&#8358;{price}</span>
                          <span className="type">{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="image mb-30">
                      <div className="single-property-gallery">
                        <div className="item">
                          <img src={images[0]} alt="" />
                        </div>
                      </div>
                      <div className="single-property-thumb">
                        {images[1] && (
                          <div className="item">
                            <img src={images[1]} alt="" />
                          </div>
                        )}
                        {images[2] && (
                          <div className="item">
                            <img src={images[2]} alt="" />
                          </div>
                        )}
                        {images[3] && (
                          <div className="item">
                            <img src={images[3]} alt="" />
                          </div>
                        )}
                        {images[4] && (
                          <div className="item">
                            <img src={images[4]} alt="" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="content">
                      <h3>Description</h3>

                      <p>{description}</p>

                      <div className="row mt-30 mb-30">
                        <div className="col-md-7 col-12">
                          <h3>Other informations</h3>
                          <ul className="amenities-list">
                            <li>Payment duration: {payment_duration} years</li>
                            <li>
                              Average Monthly Payment: &#8358;
                              {avg_monthly_payment}
                            </li>
                            <li>C of O: {has_C_of_O ? "Yes" : "No"}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 order-2 order-lg-1 pr-30 pr-sm-15 pr-xs-15">
              <div className="sidebar">
                <h4 className="sidebar-title">
                  <span className="text">Feature Property</span>
                  <span className="shape"></span>
                </h4>

                <div className="sidebar-property-list">
                  {properties.map((property, i) => (
                    <FeatureProperty key={i} property={property} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Property;

Property.defaultProps = {
  property: {
    status: "active",
    name: "Friuli-Venezia Giulia",
    location: "568 E 1st Ave, Miami",
    address: "Abuja",
    price: 19500000,
    figure: "M",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                  making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                  obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                  the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                  "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
                  below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact 
                  original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLWHeMzd1jGkh2ALFfZOVvLg6s5qemL6vtsUjRMhsLb_aXeLP0"
    ],
    payment_duration: 10,
    avg_monthly_payment: 300000,
    has_C_of_O: true,
    id: "466928bc-d210-46ea-93b5-2269e9682dca"
  },
  featureProperties: [
    ...new Array(6).fill({
      name: "Friuli-Venezia Giulia",
      location: "568 E 1st Ave, Miami",
      amount: "$550",
      figure: "Month",
      decision: "For Sale",
      id: "466928bc-d210-46ea-93b5-2269e9682dca",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLWHeMzd1jGkh2ALFfZOVvLg6s5qemL6vtsUjRMhsLb_aXeLP0"
      ]
    })
  ]
};
