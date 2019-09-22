import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import HeroSlider from './HeroSlider';
import PriceRange from '../../components/PriceRange';
import { Input } from '../../components/Input';
import PropertyOptions from '../../components/PropertyOptions';
import Property from '../../components/Property';
import Services from './Services';
import ServiceSlider from './ServiceSlider';

const HomePage = ({
  properties,
  propertyCategories,
  propertyTypes,
  featureProperties,
  packages,
  downloads
}) => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="hero-section section position-relative">
        <HeroSlider properties={properties} />
      </div>

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
                <form>
                  <div>
                    <Input type="text" placeholder="Location" />
                  </div>
                  <div>
                    <Input type="text" placeholder="Property Name" />
                  </div>
                  <PropertyOptions options={propertyCategories} placeholder="Select Category" />
                  <PropertyOptions options={propertyTypes} placeholder="Type" />
                  <div />
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
      {/* <!--Search Section section end--> */}

      {/* <!--Feature property section start--> */}
      <div className="property-section section bg-gray pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-60 mb-xs-30">
              <div className="section-title center">
                <h1>Feature Property</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {featureProperties.map((property, i) => (
              <div className="col-sm-4" key={i}>
                <Property property={property} cardSize="property-item col" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!--Feature property section end--> */}

      <div className="feature-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="feature-wrap row row-25">
            {packages.map(({ icon, title, content }, i) => (
              <div className="col-lg-4 col-sm-6 col-12 mb-50" key={i}>
                <div className="feature">
                  <div className="icon">
                    <i className={icon}></i>
                  </div>
                  <div className="content">
                    <h4>{title}</h4>
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="download-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50"
        style={{ backgroundImage: `url(${require('../../assets/images/bg/download-bg.jpg')})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="download-content">
                <h1>
                  Upcoming <span>Diaspora Invest</span> App <br />
                  Get All Notifications For New Properties On The Go
                </h1>
                <div className="buttons">
                  {downloads.map(({ icon, title, content }, i) => (
                    <Link to="/" key={i}>
                      <i className={icon}></i>
                      <span className="text">
                        <span>{title}</span>
                        {content}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="image">
                  <img src={require('../../assets/images/others/app.png')} alt="" />
                </div>
              </div>
              {/* <!--Download Content end--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!--Download apps section end--> */}

      {/* <!--Services section start--> */}

      <div className="service-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
        <div className="container">
          {/* <!--Section Title start--> */}
          <div className="row">
            <div className="col-md-12 mb-60 mb-xs-30">
              <div className="section-title center">
                <h1>Our Services</h1>
              </div>
            </div>
          </div>

          {/* <!--Section Title end--> */}
          <div className="row row-30 align-items-center">
            <div className="col-lg-5 col-12 mb-30">
              <ServiceSlider properties={properties} />
            </div>
            <Services />
          </div>
        </div>
      </div>
      {/* <!--Services section end--> */}

      {/* <!--New property section start--> */}
      <div className="property-section section pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-10">
        <div className="container">
          {/* <!--Section Title start--> */}
          <div className="row">
            <div className="col-md-12 mb-60 mb-xs-30">
              <div className="section-title center">
                <h1>Newly Added Property</h1>
              </div>
            </div>
          </div>
          {/* <!--Section Title end--> */}

          <div className="row">
            {/* <!--Property start--> */}

            {Array(6)
              .fill(properties[0])
              .map((property, i) => (
                <div className="property-item col-lg-4 col-md-6 col-12 mb-40" key={i}>
                  <div className="property-inner">
                    <div className="image">
                      <a href="single-properties.html">
                        <img src={property.image} alt="" />
                      </a>
                    </div>
                    <div className="content">
                      <div className="left">
                        <h3 className="title">
                          <a href="single-properties.html">{property.name}</a>
                        </h3>
                        <span className="location">
                          <img src="assets/images/icons/marker.png" alt="" />
                          {property.location}
                        </span>
                      </div>
                      <div className="right">
                        <div className="type-wrap">
                          <span className="price">
                            {property.amount}
                            <span>{property.figure}</span>
                          </span>
                          <span className="type">{property.decision}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {/* <!--Property end--> */}
          </div>
        </div>
      </div>
      {/* <!--New property section end--> */}

      <Footer />
    </div>
  );
};

export default HomePage;

HomePage.defaultProps = {
  properties: [
    ...Array(1).fill({
      name: 'Friuli-Venezia Giulia',
      location: '568 E 1st Ave, Miami',
      amount: '$550',
      figure: 'Month',
      decision: 'For Rent',
      image: require('../../assets/images/property/property-13.jpg'),
      id: '466928bc-d210-46ea-93b5-2269e9682dca'
    })
  ],
  propertyCategories: [
    'Office',
    'Industrial',
    'Retail & shopping center',
    'Multi-family home',
    'Healthcare',
    'Sports & entertainment',
    'Land and Residential units'
  ],

  propertyTypes: ['Apartment', 'Cafe', 'House', 'Restaurant', 'Store', 'Villa'],

  featureProperties: [
    ...new Array(3).fill({
      name: 'Friuli-Venezia Giulia',
      location: '568 E 1st Ave, Miami',
      amount: '$550',
      figure: 'Month',
      decision: 'For Sale',
      id: '466928bc-d210-46ea-93b5-2269e9682dca',
      image: require('../../assets/images/property/sidebar-property-1.jpg')
    })
  ],

  packages: [
    {
      icon: 'pe-7s-piggy',
      title: 'Low Cost',
      content: 'ed do eiusmod tempor dolor sit amet, conse elit ctetur sed tempor'
    },
    {
      icon: 'pe-7s-science',
      title: 'Modern Design',
      content: 'ed do eiusmod tempor dolor sit amet, conse elit ctetur sed tempor'
    },
    {
      icon: 'pe-7s-display1',
      title: 'Good Marketing',
      content: 'ed do eiusmod tempor dolor sit amet, conse elit ctetur sed tempor'
    },
    {
      icon: 'pe-7s-map',
      title: 'Easy to Find',
      content: 'ed do eiusmod tempor dolor sit amet, conse elit ctetur sed tempor'
    },
    {
      icon: 'pe-7s-shield',
      title: 'Reliable',
      content: 'ed do eiusmod tempor dolor sit amet, conse elit ctetur sed tempor'
    }
  ],

  downloads: [
    {
      icon: 'fa fa-apple',
      title: 'Upcoming on the',
      content: 'Apple Store'
    },
    {
      icon: 'fa fa-android',
      title: 'Upcoming on',
      content: 'Google Play'
    },
    {
      icon: 'fa fa-windows',
      title: 'Upcoming on the',
      content: 'Windows Store'
    }
  ]
};
