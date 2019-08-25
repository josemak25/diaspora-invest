import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = ({ origin, originTitle, path, pathTitle }) => {
  return (
    <div className="page-banner-section section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="page-banner-title">{origin}</h1>
            <ul className="page-breadcrumb">
              <li>
                <Link to={path}>{originTitle}</Link>
              </li>
              <li className="active">{pathTitle}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
