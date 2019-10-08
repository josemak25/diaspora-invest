import React, { useEffect, useReducer, useState } from "react";

import { connect, useSelector } from "react-redux";

import Jumbotron from "../../common/jumbotron/Jumbotron";
import Footer from "../../common/footer/Footer";
import Property from "../../components/Property";
import { Input } from "../../components/Input";
import PriceRange from "../../components/PriceRange";
import PropertyCategory from "../../components/PropertyOptions";
import getProperties from "../../redux/actions/property.action";
import Pagination from "../../common/pagination/Pagination";
import Select from "../../components/select";

const PAGINATION_LIMIT = +process.env.REACT_APP_PAGINATION_NUMBER;

const Properties = ({ getProperties, locations }) => {
  const { loading, properties } = useSelector(state => state.properties);

  const reducer = (state, action) => {
    switch (action) {
      case "next":
        return {
          ...state,
          paginate: state.paginate + 1,
          properties: state.properties.slice(
            state.paginate * PAGINATION_LIMIT,
            state.paginate * PAGINATION_LIMIT + PAGINATION_LIMIT
          )
        };
      case "prev":
        return state.paginate === 0
          ? state
          : {
              ...state,
              paginate: state.paginate - 1,
              properties: state.properties.slice(
                state.paginate * PAGINATION_LIMIT,
                state.paginate * PAGINATION_LIMIT - PAGINATION_LIMIT
              )
            };
      default:
        return state;
    }
  };

  const initiaState = {
    paginate: 0,
    properties
  };

  const initialFormState = {
    name: "",
    location: "",
    category_id: "",
    price: "",
    minPrice: "",
    maxPrice: ""
  };

  const [pagination, dispatch] = useReducer(reducer, initiaState);

  const [formState, setFormState] = useState(initialFormState);

  const handleOnChange = ({ target }) => {
    const name = target.name;
    formState[name] = target.value;
    setFormState({ ...formState });
  };

  const handleOnSelect = ({ label, value, id }) => {
    id || id === false ? (formState[value] = id) : (formState[value] = label);
    setFormState({ ...formState });
  };

  const handleSubmit = e => {
    e.preventDefault();
    getProperties({ page: pagination.paginate, queryParams: formState });
  };

  useEffect(() => {
    getProperties({ page: pagination.paginate, queryParams: formState });
  }, [pagination.paginate]);

  return (
    <>
      <Jumbotron
        origin="Properties"
        originTitle="Home"
        path="/"
        pathTitle="Properties Listing"
      />

      <div className="search-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-60 mb-xs-30">
              <div className="section-title center">
                <h1>Find Your Property</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="property-search">
                <form onSubmit={handleSubmit}>
                  <div>
                    <Select
                      options={locations}
                      placeholder="Search by location"
                      value={formState.location}
                      onChange={handleOnSelect}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Property Name"
                      value={formState.name}
                      onChange={handleOnChange}
                    />
                  </div>

                  <PropertyCategory
                    placeholder="Select Category"
                    value={formState.category_id}
                    handleChange={handleOnSelect}
                  />
                  <PriceRange />
                  <div>
                    <button>search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="property-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            {properties.map((property, index) => (
              <Property
                property={property}
                key={index}
                cardSize="property-item col-lg-4 col-md-6 col-12 mb-40"
              />
            ))}
          </div>
          <div className="row property-section-pagination">
            <div className="col-lg-8 col-12 order-1 order-lg-2 mb-sm-50 mb-xs-50">
              <Pagination pagination={pagination} dispatch={dispatch} />
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
  locations: [
    { value: "location", label: "Abuja" },
    { value: "location", label: "Lagos" }
  ]
};
