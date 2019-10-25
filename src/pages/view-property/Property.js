import React, { useEffect } from 'react';

import { connect, useSelector } from 'react-redux';

import { bookmarkProperty } from '../../redux/actions/bookmark.action';

import Footer from '../../common/footer/Footer';
import FeatureProperty from '../../pages/properties/FeatureProperty';
import Jumbotron from '../../common/jumbotron/Jumbotron';

import Button from '../../components/Button';

const Property = props => {
  const { user_type } = useSelector(({ auth }) => auth.user);
  const { properties } = useSelector(({ properties }) => properties);
  const { error, bookmarkedProperties } = useSelector(
    ({ bookmarkedProperties }) => bookmarkedProperties
  );

  let bookmarked = false;

  const property = props.location.state;

  const {
    id,
    name,
    location,
    address,
    images,
    price,
    description,
    has_C_of_O,
    status,
    payment_duration,
    avg_monthly_payment
  } = property;

  const handleOnClick = e => {
    e.preventDefault();

    const details = { property_id: id };
    props.bookmarkProperty(details);
    bookmarked = true;
  };

  useEffect(() => {
    bookmarkedProperties.some(property => {
      console.log('xx', property.property_id, id);
      if (property.property_id === id) {
        bookmarked = true;
      }
    });
  }, [bookmarkedProperties]);

  return (
    <div id="main-wrapper">
      <Jumbotron origin={name} originTitle={address} path="/property/:id" pathTitle={location} />
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
                          <img src={require('../../assets/images/icons/marker.png')} alt="" />
                          {address}
                          <b style={{ marginLeft: '10px' }}>{location}</b>
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
                          <img src={images[0]} alt="property-gallery" />
                        </div>
                      </div>
                      <div className="single-property-thumb">
                        {images[1] && (
                          <div className="item">
                            <img src={images[1]} alt="property-gallery" />
                          </div>
                        )}
                        {images[2] && (
                          <div className="item">
                            <img src={images[2]} alt="property-gallery" />
                          </div>
                        )}
                        {images[3] && (
                          <div className="item">
                            <img src={images[3]} alt="property-gallery" />
                          </div>
                        )}
                        {images[4] && (
                          <div className="item">
                            <img src={images[4]} alt="property-gallery" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="content">
                      <h3>Description</h3>

                      <p>{description}</p>

                      <div className="row mt-30 mb-30">
                        <div className="col-md-7 col-12">
                          <h3>Other information's</h3>
                          <ul className="amenities-list">
                            <li>Payment duration: {payment_duration} years</li>
                            <li>
                              Average Monthly Payment: &#8358;
                              {avg_monthly_payment}
                            </li>
                            <li>C of O: {has_C_of_O ? 'Yes' : 'No'}</li>
                          </ul>
                        </div>
                      </div>
                      {error && (
                        <div className="col-12 mb-15 mt-0">
                          <div className="alert alert-success pb-0 pt-0" role="alert">
                            {error}
                          </div>
                        </div>
                      )}
                      {user_type === 'investor' && (
                        <div onClick={handleOnClick}>
                          <Button
                            textContent={
                              bookmarked ? 'You have bookmarked this Property' : 'Bookmark Property'
                            }
                            moreStyle={'submit-btn'}
                            disabled={bookmarked}
                          />
                        </div>
                      )}
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

const mapActionsToProps = {
  bookmarkProperty
};

export default connect(
  null,
  mapActionsToProps
)(Property);
