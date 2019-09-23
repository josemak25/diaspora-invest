import React from 'react';

const PartnersList = ({ partners }) => {
  return (
    <div className="container">
      {/* <!--Section Title start--> */}
      <div className="row">
        <div className="col-md-12 mb-60 mb-xs-30">
          <div className="section-title center">
            <h1>Our Partners</h1>
          </div>
        </div>
      </div>
      {/* <!--Section Title end--> */}

      <div className="row">
        {/* <!--Brand Slider start--> */}
        <div className="brand-carousel section"></div>
        {partners.map((partner, i) => (
          <div className="brand col" key={i}>
            <img src={require(`../../assets/images/brands/${partner}`)} alt="partners_brand_logo" />
          </div>
        ))}
        {/* <!--Brand Slider end--> */}
      </div>
    </div>
  );
};

export default PartnersList;

PartnersList.defaultProps = {
  partners: [
    'brand-1.png',
    'brand-2.png',
    'brand-3.png',
    'brand-4.png',
    'brand-5.png',
    'brand-6.png'
  ]
};
