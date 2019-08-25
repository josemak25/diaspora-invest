import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../App.css';

const Header = ({ menuLink }) => {
  return (
    <header className="header header-sticky">
      <div className="header-bottom menu-center">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col mt-10 mb-10">
              <div className="logo">
                <NavLink to="/">
                  <img src={require('../../assets/images/logo.png')} alt="company-logo" />
                </NavLink>
              </div>
            </div>

            <div className="col d-none d-lg-flex">
              <nav className="main-menu">
                <ul>
                  {menuLink.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.path} activeClassName="activeNavLink">
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="col mr-sm-50 mr-xs-50">
              <div className="header-user">
                <NavLink to="/login-signup" className="user-toggle">
                  <i className="pe-7s-user"></i>
                  <span>Login or Register</span>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex d-lg-none">
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.defaultProps = {
  menuLink: [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Properties',
      path: '/properties'
    },
    {
      name: 'Agent',
      path: '/agent'
    },
    {
      name: 'Agencies',
      path: '/agencies'
    },
    {
      name: 'News',
      path: '/news'
    },
    {
      name: 'Contact Us',
      path: '/contact-us'
    }
  ]
};
