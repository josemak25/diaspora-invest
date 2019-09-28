import React from 'react';

const ChangePassword = () => {
  return (
    <>
      <div id='password-tab' className='tab-pane'>
        <form action='#'>
          <div className='row'>
            <div className='col-12 mb-30'>
              <h3 className='mb-0'>Change Password</h3>
            </div>
            <div className='col-12 mb-30'>
              <label htmlFor='current_password'>Current Password</label>
              <input
                type='password'
                id='current_password'
                value='currentpassword'
              />
            </div>
            <div className='col-12 mb-30'>
              <label htmlFor='new_password'>New Password</label>
              <input type='password' id='new_password' />
            </div>
            <div className='col-12 mb-30'>
              <label htmlFor='confirm_new_password'>Confirm New Password</label>
              <input type='password' id='confirm_new_password' />
            </div>
            <div className='col-12 mb-30'>
              <button className='btn'>Save Change</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
