import React from 'react';

const UserProfile = () => {
  return (
    <>
      <div id='profile-tab' class='tab-pane show active'>
        <form action='#'>
          <div class='row'>
            <div class='col-12 mb-30'>
              <h3 class='mb-0'>Personal Profile</h3>
            </div>
            <div class='col-md-6 col-12 mb-30'>
              <label for='f_name'>First Name</label>
              <input type='text' id='f_name' value='Donald' />
            </div>
            <div class='col-md-6 col-12 mb-30'>
              <label for='l_name'>Last Name</label>
              <input type='text' id='l_name' value='Palmer' />
            </div>
            <div class='col-12 mb-30'>
              <label for='about_me'>About Me</label>
              <textarea id='about_me'></textarea>
            </div>
            <div class='col-12'>
              <div class='row'>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_address'>Address</label>
                  <input
                    type='text'
                    id='personal_address'
                    value='256, 1st AVE, Manchester 125 , Noth England'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_number'>Phone Number</label>
                  <input
                    type='text'
                    id='personal_number'
                    value='(756) 447 5779'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_email'>Email</label>
                  <input
                    type='text'
                    id='personal_email'
                    value='info@example.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_web'>Website</label>
                  <input
                    type='text'
                    id='personal_web'
                    value='www.example.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_agency'>Agencies</label>
                  <input
                    type='text'
                    id='personal_agency'
                    value=' Royao Estates, Duplex Estates'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_company'>Company</label>
                  <input type='text' id='personal_company' value='GTA5' />
                </div>
              </div>
              <h4>Social</h4>
              <div class='row'>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_social_facebook'>
                    <i class='fa fa-facebook-official'></i>Facebook
                  </label>
                  <input
                    type='text'
                    id='personal_social_facebook'
                    value='www.facebook.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_social_twitter'>
                    <i class='fa fa-twitter'></i>Twitter
                  </label>
                  <input
                    type='text'
                    id='personal_social_twitter'
                    value='www.twitter.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_social_linkedin'>
                    <i class='fa fa-linkedin'></i>Linkedin
                  </label>
                  <input
                    type='text'
                    id='personal_social_linkedin'
                    value='www.linkedin.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_social_google'>
                    <i class='fa fa-google'></i>Google Plus
                  </label>
                  <input
                    type='text'
                    id='personal_social_google'
                    value='www.google.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_social_instagram'>
                    <i class='fa fa-instagram'></i>Instagram
                  </label>
                  <input
                    type='text'
                    id='personal_social_instagram'
                    value='www.instagram.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_social_pinterest'>
                    <i class='fa fa-pinterest'></i>Pinterest
                  </label>
                  <input
                    type='text'
                    id='personal_social_pinterest'
                    value='www.pinterest.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_social_skype'>
                    <i class='fa fa-skype'></i>Skype
                  </label>
                  <input
                    type='text'
                    id='personal_social_skype'
                    value='www.skype.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='personal_social_tumblr'>
                    <i class='fa fa-tumblr'></i>Tumblr
                  </label>
                  <input
                    type='text'
                    id='personal_social_tumblr'
                    value='www.tumblr.com'
                  />
                </div>
              </div>
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

export default UserProfile;
