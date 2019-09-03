import React from 'react';
import Header from '../../common/header/Header';
import Jumbotron from '../../common/jumbotron/Jumbotron';
import Footer from '../../common/footer/Footer';
import TopAgents from './TopAgents';
import FeatureProperty from './FeatureProperty';
import Property from './Property';
import { Input } from '../../components/Input';

const Properties = ({ propertyCategories, properties, agents, featureProperties }) => {
  return (
    <>
      <Header />
      <Jumbotron origin="Properties" originTitle="Home" path="/" pathTitle="Properties Listing" />

      <div className="property-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 order-1 order-lg-2 mb-sm-50 mb-xs-50">
              <div className="row">
                {properties.map((property, index) => (
                  <Property property={property} key={index} />
                ))}
              </div>
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

                    <div>
                      <select className="nice-select">
                        {propertyCategories.map((category, index) => (
                          <option key={index}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div />
                    <div>
                      <div>
                        <div
                          id="search-price-range"
                          className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                        >
                          <div
                            className="ui-slider-range ui-corner-all ui-widget-header"
                            style={{ left: '12.5%', width: '42.43%' }}
                          ></div>
                          <span
                            tabIndex="0"
                            className="ui-slider-handle ui-corner-all ui-state-default"
                            style={{ left: '12.5%' }}
                          >
                            <span>$12500</span>
                          </span>
                          <span
                            tabIndex="0"
                            className="ui-slider-handle ui-corner-all ui-state-default"
                            style={{ left: '54.93%' }}
                          >
                            <span>$54930</span>
                          </span>
                        </div>
                      </div>
                    </div>

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

export default Properties;

Properties.defaultProps = {
  propertyCategories: [
    'Office',
    'Industrial',
    'Industrial',
    'Retail & shopping center',
    'Multi-family home',
    'Healthcare',
    'Sports & entertainment',
    'Land and Residential units'
  ],
  properties: [
    ...new Array(8).fill({
      propertyTitle: 'Friuli-Venezia Giulia',
      locationName: '568 E 1st Ave, Miami',
      amount: '$550',
      figure: 'M',
      decision: 'For Rent',
      image: require('../../assets/images/property/property-1.jpg'),
      id: '466928bc-d210-46ea-93b5-2269e9682dca'
    })
  ],
  agents: [
    ...new Array(2).fill({
      image: require('../../assets/images/agent/agent-1.jpg'),
      name: 'Donald Palmer',
      phone: '(756) 447 5779',
      noOfProperties: 7
    })
  ],

  featureProperties: [
    ...new Array(2).fill({
      propertyTitle: 'Friuli-Venezia Giulia',
      locationName: '568 E 1st Ave, Miami',
      amount: '$550',
      figure: 'Month',
      decision: 'For Sale',
      id: '466928bc-d210-46ea-93b5-2269e9682dca',
      image: require('../../assets/images/property/sidebar-property-1.jpg')
    })
  ]
};
