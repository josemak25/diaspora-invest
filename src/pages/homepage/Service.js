import React from 'react';

const Service = ({ service: { title, content, icon } }) => {
  return (
    <div className="col-md-6 col-12 mb-30">
      <div className="service">
        <div className="service-inner">
          <div className="head">
            <div className="icon">
              <img src={icon} alt="service-icon" />
            </div>
            <h4>{title}</h4>
          </div>
          <div className="content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
