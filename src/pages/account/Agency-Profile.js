import React from 'react';
import { Input } from '../../components/Input';
import Button from '../../components/Button';

const AgencyProfile = ({ details }) => {
  return (
    <>
      <div id='agency-tab' class='tab-pane'>
        <form action='#'>
          <div class='row'>
            <div class='col-12 mb-30'>
              <h3 class='mb-0'>Agency Profile</h3>
            </div>
            <div class='col-12 mb-30'>
              <label for='agency_name'>Agency Name</label>
              <input type='text' id='agency_name' value={details.name} />
            </div>

            <div class='col-12'>
              <div class='row'>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_address'>Address</label>
                  <Input
                    type='text'
                    id='agency_address'
                    value={details.address}
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_number'>Phone Number</label>
                  <Input type='text' id='agency_number' value={details.phone} />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_email'>Email</label>
                  <Input type='text' id='agency_email' value={details.email} />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_web'>Website</label>
                  <Input type='text' id='agency_web' value={details.website} />
                </div>
              </div>
            </div>
            <div class='col-12 mb-30'>
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
