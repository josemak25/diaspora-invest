import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../common/footer/Footer';
import HeroSlider from './HeroSlider';
import Services from './Services';
import ServiceSlider from './ServiceSlider';
import AgentList from './AgentList';
import PartnersList from './PartnersList';

import formatPrice from '../../utils/formatPrice';

const HomePage = ({ heroProperty, packages, downloads, agents }) => {
  const { properties } = useSelector(({ properties }) => properties);

  return (
    <div id="main-wrapper">
      <div className="hero-section section position-relative">
        <HeroSlider properties={heroProperty} />
      </div>

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

            {properties.slice(0, 6).map((property, i) => (
              <div className="property-item col-lg-4 col-md-6 col-12 mb-40" key={i}>
                <div className="property-inner">
                  <div className="image">
                    <a href="single-properties.html">
                      <img
                        src={property.images[Math.floor(Math.random() * property.images.length)]}
                        alt="property_image"
                        className="property-inner-image"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <div className="left">
                      <h3 className="title">
                        <a href="single-properties.html">{property.name.substr(0, 20)}...</a>
                      </h3>
                      <span className="location">
                        <img
                          src={require('../../assets/images/icons/marker.png')}
                          alt="property-location"
                        />
                        {property.location}
                      </span>
                    </div>
                    <div className="right">
                      <div className="type-wrap">
                        <span className="price">&#8358;{formatPrice(property)}</span>
                        <span className="type">For Sale</span>
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
        style={{
          backgroundImage: `url(${require('../../assets/images/hero/hero-1.jpg')})`
        }}
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
                  <img src={require('../../assets/images/others/app.png')} alt="app_download" />
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

      <div className="agent-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <AgentList agents={agents} />
      </div>

      <div className="brand-section section pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <PartnersList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

HomePage.defaultProps = {
  heroProperty: [
    {
      name: 'Friuli-Venezia Giulia',
      location: '568 E 1st Ave, Miami',
      price: '5,500,000',
      payment_duration: '4',
      decision: 'For Sale',
      id: '466928bc-d210-46ea-93b5-2269e9682dca',
      images: [require('../../assets/images/hero/hero-3.jpg')]
    }
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
    }
  ],

  agents: [
    ...new Array(4).fill({
      image: require('../../assets/images/agent/agent-1.jpg'),
      name: 'Donald Palmer',
      phone: '(756) 447 5779',
      noOfProperties: Math.floor(Math.random() * 10),
      id: '466928bc-d210-46ea-93b5-2269e9682dca'
    })
  ]
};
