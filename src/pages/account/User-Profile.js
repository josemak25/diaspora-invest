import React from 'react';
import { Input } from '../../components/Input';
import Button from '../../components/Button';

const UserProfile = ({ details }) => {
  return (
    <>
      <div id='profile-tab' className='tab-pane show active'>
        <form action='#'>
          <div className='row'>
            <div className='col-12 mb-30'>
              <h3 className='mb-0'>Personal Profile</h3>
            </div>
            <div className='col-12 mb-30'>
              <label for='name'>Name</label>
              <Input type='text' id='name' value={details.name} />
            </div>
            <div className='col-12'>
              <div className='row'>
                <div className='col-md-6 col-12 mb-30'>
                  <label for='personal_email'>Email Address</label>
                  <Input
                    type='text'
                    id='personal_email'
                    value={details.email}
                  />
                </div>
                <div className='col-md-6 col-12 mb-30'>
                  <label for='personal_number'>Phone Number</label>
                  <Input
                    type='text'
                    id='personal_number'
                    value={details.phone}
                  />
                </div>
              </div>
            </div>
            <div className='col-12 mb-30'>
              <Button textContent='Save Changes' submit='submit' />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserProfile;

UserProfile.defaultProps = {
  details: {
    name: 'Chibueze Eziokwubundu',
    email: 'chibueze.eziokwubundu@gmail.com',
    phone: '08023456789'
  }
};
