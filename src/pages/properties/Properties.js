import React, { useEffect, useReducer } from "react";

import { connect, useSelector } from "react-redux";

import Jumbotron from "../../common/jumbotron/Jumbotron";
import Footer from "../../common/footer/Footer";
import TopAgents from "./TopAgents";
import FeatureProperty from "./FeatureProperty";
import Property from "../../components/Property";
import { Input } from "../../components/Input";
import PriceRange from "../../components/PriceRange";
import PropertyCategory from "../../components/PropertyOptions";
import getProperties from "../../redux/actions/property.action";
import Pagination from "../../common/pagination/Pagination";

const Properties = ({
  agents,
  featureProperties,
  propertyCategories,
  getProperties
}) => {
  const { loading, properties } = useSelector(state => state.properties);

  const reducer = (state, action) => {
    switch (action) {
      case "next":
        return {
          ...state,
          paginate: state.paginate + 1,
          properties: properties.slice(
            state.paginate * 20,
            state.paginate * 20 + 20
          )
        };
      case "prev":
        return state.paginate === 0
          ? state
          : {
              ...state,
              paginate: state.paginate - 1,
              properties: properties.slice(
                state.paginate * 20,
                state.paginate * 20 - 20
              )
            };
      default:
        return state.paginate;
    }
  };

  const [pagination, dispatch] = useReducer(reducer, {
    paginate: 0,
    properties
  });

  useEffect(() => {
    getProperties(pagination.paginate);
  }, [pagination]);

  const handlePagination = e => {
    console.log(e);
    // setPagenation()
  };

  return (
    <>
      <Jumbotron
        origin="Properties"
        originTitle="Home"
        path="/"
        pathTitle="Properties Listing"
      />

      <div className="property-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 order-1 order-lg-2 mb-sm-50 mb-xs-50">
              <div className="row">
                {properties.map((property, index) => (
                  <Property
                    property={property}
                    key={index}
                    cardSize="property-item col-md-6 col-12 mb-40"
                  />
                ))}
              </div>
              <Pagination pagination={pagination} dispatch={dispatch} />
            </div>
            <div className="col-lg-4 col-12 order-2 order-lg-1 pr-30 pr-sm-15 pr-xs-15">
              <div className="sidebar">
                <h4 className="sidebar-title">
                  <span className="text">Search Property</span>
                  <span className="shape"></span>
                </h4>

                <div className="property-search sidebar-property-search">
                  <form>
                    <div>
                      <Input type="text" placeholder="Location" />
                    </div>
                    <div>
                      <Input type="text" placeholder="Property Name" />
                    </div>

                    <PropertyCategory
                      options={propertyCategories}
                      placeholder="Select Category"
                    />

                    <div />
                    <PriceRange />
                    <div>
                      <button>search</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="sidebar">
                <h4 className="sidebar-title">
                  <span className="text">Feature Property</span>
                  <span className="shape"></span>
                </h4>

                <div className="sidebar-property-list">
                  {featureProperties.map((property, i) => (
                    <FeatureProperty key={i} property={property} />
                  ))}
                </div>
              </div>

              <div className="sidebar">
                <h4 className="sidebar-title">
                  <span className="text">Top Agents</span>
                  <span className="shape"></span>
                </h4>
                <div className="sidebar-agent-list">
                  {agents.map((agent, i) => (
                    <TopAgents key={i} agent={agent} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const mapActionToProps = {
  getProperties
};

export default connect(
  null,
  mapActionToProps
)(Properties);

Properties.defaultProps = {
  defaultProperties: [
    ...new Array(8).fill({
      name: "Friuli-Venezia Giulia",
      location: "568 E 1st Ave, Miami",
      amount: "$550",
      payment_duration: "5",
      decision: "For Sale",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLWHeMzd1jGkh2ALFfZOVvLg6s5qemL6vtsUjRMhsLb_aXeLP0"
      ],
      id: "466928bc-d210-46ea-93b5-2269e9682dca"
    })
  ],
  agents: [
    ...new Array(2).fill({
      image: require("../../assets/images/agent/agent-1.jpg"),
      name: "Donald Palmer",
      phone: "(756) 447 5779",
      noOfProperties: 7
    })
  ],

  featureProperties: [
    ...new Array(2).fill({
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
  ],
  propertyCategories: [
    "Office",
    "Industrial",
    "Retail & shopping center",
    "Multi-family home",
    "Healthcare",
    "Sports & entertainment",
    "Land and Residential units"
  ]
};
