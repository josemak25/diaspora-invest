import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';

const Footer = ({ socialLinks, widgetLinks }) => {
  return (
    <footer
      className="footer-section section"
      style={{ backgroundImage: `url${require('../../assets/images/bg/footer-bg.jpg')}` }}
    >
      <div className="footer-top section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-60 pb-lg-40 pb-md-30 pb-sm-20 pb-xs-10">
        <div className="container">
          <div className="row row-25">
            <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
              <img src={require('../../assets/images/footer-logo.png')} alt="footer" />
              <p>
                Disapora Invest - Real Estate Management App. elit, sed do to eiumod tempor dolor
                sit amet, ctetur adipiscing elit seddo dolor sit amet.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <Link to={social.path} className={social.name} key={index}>
                    <i className={social.icon}></i>
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
              <h4 className="title">
                <span className="text">Contact us</span>
                <span className="shape"></span>
              </h4>
              <ul>
                <li>
                  <i className="fa fa-map-o"></i>
                  <span>256, 1st AVE, Manchester 125 , Noth England</span>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <span>
                    <p>+234 345 678 102</p>
                    <p>+234 345 678 101</p>
                  </span>
                </li>
                <li>
                  <i className="fa fa-envelope-o"></i>
                  <span>
                    <p>info@diaspora.com</p>
                  </span>
                </li>
              </ul>
            </div>

            <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
              <h4 className="title">
                <span className="text">Useful links</span>
                <span className="shape"></span>
              </h4>
              <ul>
                {widgetLinks.map((widget, index) => (
                  <li key={index}>
                    <Link to={widget.link}>{widget.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-widget col-lg-3 col-md-6 col-12 mb-40">
              <h4 className="title">
                <span className="text">Newsletter</span>
                <span className="shape"></span>
              </h4>

              <p>
                Subscribe our newsletter and get all latest news about our latest properties,
                promotions, offers and discount
              </p>

              <form id="mc-form" className="mc-form footer-newsletter">
                <Input id="mc-email" type="email" placeholder="Email Here.." />
                <button id="mc-submit">
                  <i className="fa fa-paper-plane-o"></i>
                </button>
              </form>
              <div className="mailchimp-alerts text-centre">
                <div className="mailchimp-submitting"></div>
                <div className="mailchimp-success"></div>
                <div className="mailchimp-error"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright text-center">
                <p>
                  Copyright &copy;2019 <Link to="/">Disapora Invest</Link>. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

Footer.defaultProps = {
  socialLinks: [
    {
      path: 'http://www.facebook.com/diaspora-invest',
      icon: 'fa fa-facebook',
      name: 'facebook'
    },
    {
      path: 'http://www.twitter.com/diaspora-invest',
      icon: 'fa fa-twitter',
      name: 'twitter'
    },
    {
      path: 'http://www.linkedin.com/diaspora-invest',
      icon: 'fa fa-linkedin',
      name: 'linkedin'
    },
    {
      path: 'http://www.google.com/diaspora-invest',
      icon: 'fa fa-google-plus',
      name: 'google'
    },
    {
      path: 'http://www.pinterest.com/diaspora-invest',
      icon: 'fa fa-pinterest-p',
      name: 'pinterest'
    }
  ],

  widgetLinks: [
    {
      name: 'Rental Builidngs',
      link: '/login-signup'
    },
    {
      name: 'Browe all Categories',
      link: '/login-signup'
    },
    {
      name: 'Top Mortagages Rates',
      link: '/login-signup'
    },
    {
      name: 'RentalTerms of use',
      link: '/login-signup'
    },
    {
      name: 'Privacy Policy',
      link: '/login-signup'
    }
  ]
};
