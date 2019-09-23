import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import FeatureProperty from "../../pages/properties/FeatureProperty";
import Jumbotron from "../../common/jumbotron/Jumbotron";

const Property = ({ property, featureProperties }) => {
  console.log(property);
  const {
    name,
    location,
    address,
    image,
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
      <Header />
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
                        <h1 className="title">Friuli-Venezia Giulia</h1>
                        <span className="location">
                          <img src="assets/images/icons/marker.png" alt="" />
                          568 E 1st Ave, Miami
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
                      <img src={image} alt="" />
                    </div>

                    <div className="content">
                      <h3>Description</h3>

                      <p>{description}</p>

                      <div className="row mt-30 mb-30">
                        <div className="col-md-7 col-12">
                          <h3>Other informations</h3>
                          <ul className="amenities-list">
                            <li>Payment duration: {payment_duration} years</li>
                            <li>Average Monthly Payment: &#8358; {avg_monthly_payment}</li>
                            <li>C of O: {has_C_of_O ? "Yes" : "No"}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col-lg-4 col-12 order-2 order-lg-1 pr-30 pr-sm-15 pr-xs-15">
              <div classNameName="sidebar">
                <h4 classNameName="sidebar-title">
                  <span classNameName="text">Feature Property</span>
                  <span classNameName="shape"></span>
                </h4>

                <div classNameName="sidebar-property-list">
                  {featureProperties.map((property, i) => (
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
                  the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) 
                  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                  \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
                  below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact 
                  original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    image: require("../../assets/images/property/property-1.jpg"),
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
      image: require("../../assets/images/property/sidebar-property-1.jpg")
    })
  ]
};
