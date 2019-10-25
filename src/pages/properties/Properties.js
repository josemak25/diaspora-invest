import React, { useReducer, useState, useEffect } from 'react';
import store from '../../redux/store';

import { connect, useSelector } from 'react-redux';

import Jumbotron from '../../common/jumbotron/Jumbotron';
import Footer from '../../common/footer/Footer';
import Property from '../../components/Property';
import { Input } from '../../components/Input';
import PriceRange from '../../components/PriceRange';
import PropertyCategory from '../../components/PropertyOptions';
import getProperties from '../../redux/actions/property.action';
import Pagination from '../../common/pagination/Pagination';
import Select from '../../components/select';
import paginationReducer from '../../redux/reducers/pagination.reducer';

const Properties = ({ locations }) => {
  const {
    dispatch,
    handleOnChange,
    handleOnSelect,
    handleRangeChange,
    handleSubmit,
    initialPriceState,
    formState,
    pagination,
    properties
  } = useProperty();

  return (
    <>
      <Jumbotron origin="Properties" originTitle="Home" path="/" pathTitle="Properties Listing" />

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
                  <PriceRange {...{ handleRangeChange, initialPriceState }} />
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
              <Pagination {...{ pagination, dispatch, formState }} />
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
  locations: [{ value: 'location', label: 'Abuja' }, { value: 'location', label: 'Lagos' }]
};

const useProperty = () => {
  const initialFormState = {
    name: '',
    location: '',
    category_id: '',
    price: '',
    minPrice: '',
    maxPrice: ''
  };

  const { loading, properties } = useSelector(state => state.properties);

  const [formState, setFormState] = useState(initialFormState);

  const initialPriceState = {
    min: 100000,
    max: 100000000,
    defaultValues: [100000 / 2, 100000000 / 2]
  };

  const initialPropertyState = {
    paginate: 0,
    properties
  };

  const [pagination, dispatch] = useReducer(paginationReducer, initialPropertyState);

  const handleOnChange = ({ target }) => {
    const name = target.name;
    formState[name] = target.value;
    setFormState({ ...formState });
  };

  const handleOnSelect = ({ label, value, id }) => {
    id || id === false ? (formState[value] = id) : (formState[value] = label);
    setFormState({ ...formState });
  };

  const handleRangeChange = ([min, max]) => {
    const priceRange = { minPrice: min, maxPrice: max };
    setFormState({ ...formState, priceRange });
  };

  const handleSubmit = e => {
    e.preventDefault();
    getProperties({ page: pagination.paginate, queryParams: formState });
  };

  useEffect(() => {
    store.dispatch(getProperties({ page: pagination.paginate, queryParams: formState }));
  }, [pagination.paginate]);

  return {
    dispatch,
    handleOnChange,
    handleOnSelect,
    handleRangeChange,
    handleSubmit,
    initialPriceState,
    formState,
    pagination,
    properties,
    loading
  };
};
