import React from 'react';
import { Input } from '../../components/Input';
import Button from '../../components/Button';

const UserProfile = ({ details }) => {
  return (
    <>
      <div id='profile-tab' class='tab-pane show active'>
        <form action='#'>
          <div class='row'>
            <div class='col-12 mb-30'>
              <h3 class='mb-0'>Personal Profile</h3>
            </div>
            <div class='col-12 mb-30'>
              <label for='name'>Name</label>
              <Input type='text' id='name' value={details.name} />
            </div>
            <div class='col-12'>
              <div class='row'>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_email'>Email Address</label>
                  <Input
                    type='text'
                    id='personal_email'
                    value={details.email}
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_number'>Phone Number</label>
                  <Input
                    type='text'
                    id='personal_number'
                    value={details.phone}
                  />
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

export default UserProfile;
