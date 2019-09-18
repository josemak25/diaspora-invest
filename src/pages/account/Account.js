import React from 'react';
import Header from '../../common/header/Header';
import Jumbotron from '../../common/jumbotron/Jumbotron';
import Sidebar from './Sidebar';
import UserProfile from './User-Profile';
import AgencyProfile from './Agency-Profile';
import MyProperties from './My-Properties';
import ChangePassword from './Change-Password';
import Footer from '../../common/footer/Footer';

const Account = ({ sidebarLinks }) => {
  return (
    <>
      <Header />
      <Jumbotron
        origin='My Account'
        originTitle='Home'
        path='/'
        pathTitle='My Account'
      />
      <div class='login-register-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20'>
        <div class='container'>
          <div class='row row-25'>
            <div className='col-lg-4 col-12 mb-sm-50 mb-xs-50'>
              <Sidebar links={sidebarLinks} />
            </div>
            <div class='col-lg-8 col-12'>
              <div class='tab-content'>
                <UserProfile />
                <AgencyProfile />
                <MyProperties />
                <ChangePassword />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;

Account.defaultProps = {
  sidebarLinks: [
    { name: 'My Profile', url: '#profile-tab' },
    { name: 'Agency Profile', url: '#agency-tab' },
    { name: 'My Properties', url: '#properties-tab' },
    { name: 'Add New Property', url: '#profile' },
    { name: 'Change Password', url: '#password-tab' },
    { name: 'Log Out', url: '#profile' }
  ]
};
