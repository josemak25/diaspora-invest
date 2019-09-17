import React from 'react';
import Service from './Service';

const Services = ({ services }) => {
  return (
    <div className="col-lg-7 col-12">
      <div className="row row-20">
        {services.map((service, i) => (
          <Service service={service} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Services;

Services.defaultProps = {
  services: [
    {
      title: 'Buy Property',
      content: `Diaspora Invest - Real Estate Bootstrap 4 Template best theme for elit, seddo eiumod tempor dolor sit.`,
      icon: require('../../assets/images/service/service-1.png')
    },
    {
      title: 'Sale Property',
      content: `Diaspora Invest - Real Estate Bootstrap 4 Template best theme for elit, seddo eiumod tempor dolor sit.`,
      icon: require('../../assets/images/service/service-2.png')
    },
    {
      title: 'Rent Property',
      content: `Diaspora Invest - Real Estate Bootstrap 4 Template best theme for elit, seddo eiumod tempor dolor sit.`,
      icon: require('../../assets/images/service/service-3.png')
    },
    {
      title: 'Mortgage Property',
      content: `Diaspora Invest - Real Estate Bootstrap 4 Template best theme for elit, seddo eiumod tempor dolor sit.`,
      icon: require('../../assets/images/service/service-4.png')
    }
  ]
};
