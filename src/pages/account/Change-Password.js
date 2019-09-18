import React from 'react';

const ChangePassword = () => {
  return (
    <>
      <div id='password-tab' class='tab-pane'>
        <form action='#'>
          <div class='row'>
            <div class='col-12 mb-30'>
              <h3 class='mb-0'>Change Password</h3>
            </div>
            <div class='col-12 mb-30'>
              <label for='current_password'>Current Password</label>
              <input
                type='password'
                id='current_password'
                value='currentpassword'
              />
            </div>
            <div class='col-12 mb-30'>
              <label for='new_password'>New Password</label>
              <input type='password' id='new_password' />
            </div>
            <div class='col-12 mb-30'>
              <label for='confirm_new_password'>Confirm New Password</label>
              <input type='password' id='confirm_new_password' />
            </div>
            <div class='col-12 mb-30'>
              <button class='btn'>Save Change</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
