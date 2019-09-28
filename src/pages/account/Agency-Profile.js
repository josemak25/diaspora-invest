import React from 'react';
import { Input } from '../../components/Input';
import Button from '../../components/Button';

const AgencyProfile = ({ details }) => {
  return (
    <>
      <div id='agency-tab' className='tab-pane'>
        <form action='#'>
          <div className='row'>
            <div className='col-12 mb-30'>
              <h3 className='mb-0'>Agency Profile</h3>
            </div>
            <div className='col-12 mb-30'>
              <label htmlFor='agency_name'>Agency Name</label>
              <input type='text' id='agency_name' value={details.name} />
            </div>

            <div className='col-12'>
              <div className='row'>
                <div className='col-md-6 col-12 mb-30'>
                  <label htmlFor='agency_address'>Address</label>
                  <Input
                    type='text'
                    id='agency_address'
                    value={details.address}
                  />
                </div>
                <div className='col-md-6 col-12 mb-30'>
                  <label htmlFor='agency_number'>Phone Number</label>
                  <Input type='text' id='agency_number' value={details.phone} />
                </div>
                <div className='col-md-6 col-12 mb-30'>
                  <label htmlFor='agency_email'>Email</label>
                  <Input type='text' id='agency_email' value={details.email} />
                </div>
                <div className='col-md-6 col-12 mb-30'>
                  <label htmlFor='agency_web'>Website</label>
                  <Input type='text' id='agency_web' value={details.website} />
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

export default AgencyProfile;

AgencyProfile.defaultProps = {
  details: {
    name: 'Brains & Hammers',
    email: 'customerservice@brainsandhammers.com',
    address: '112A Olabode George, Off Ajose Adeogun, Victoria Island, Lagos',
    phone: '08023456789',
    website: 'www.brainsandhammers.com'
  }
};
