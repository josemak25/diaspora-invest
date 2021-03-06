import React from 'react';
import { useSelector } from 'react-redux';

import Jumbotron from '../../common/jumbotron/Jumbotron';
import Sidebar from './Sidebar';
import UserProfile from './User-Profile';
import AgencyProfile from './Agency-Profile';
import MyProperties from './My-Properties';
import Footer from '../../common/footer/Footer';

const Account = () => {
  const { user_type } = useSelector(({auth}) => auth.user );
  return (
    <>
      <Jumbotron
        origin='My Account'
        originTitle='Home'
        path='/'
        pathTitle='My Account'
      />
      <div className='login-register-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20'>
        <div className='container'>
          <div className='row row-25'>
            <div className='col-lg-4 col-12 mb-sm-50 mb-xs-50'>
              <Sidebar />
            </div>
            <div className='col-lg-8 col-12'>
              <div className='tab-content'>
                <UserProfile />
                { user_type === 'seller' && <AgencyProfile />}
                <MyProperties />
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
