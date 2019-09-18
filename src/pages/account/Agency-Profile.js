import React from 'react';

const AgencyProfile = () => {
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
              <input type='text' id='agency_name' value='Royao Estates' />
            </div>
            <div class='col-12 mb-30'>
              <label for='about_agency'>About Agency</label>
              <textarea id='about_agency'></textarea>
            </div>
            <div class='col-12'>
              <div class='row'>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_address'>Address</label>
                  <input
                    type='text'
                    id='agency_address'
                    value='256, 1st AVE, Manchester 125 , Noth England'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_number'>Phone Number</label>
                  <input
                    type='text'
                    id='agency_number'
                    value='(756) 447 5779'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_email'>Email</label>
                  <input
                    type='text'
                    id='agency_email'
                    value='info@example.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_web'>Website</label>
                  <input type='text' id='agency_web' value='www.example.com' />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_license'>License</label>
                  <input type='text' id='agency_license' value='AB7876A6' />
                </div>
              </div>
              <h4>Social</h4>
              <div class='row'>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_social_facebook'>
                    <i class='fa fa-facebook-official'></i>Facebook
                  </label>
                  <input
                    type='text'
                    id='agency_social_facebook'
                    value='www.facebook.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_social_twitter'>
                    <i class='fa fa-twitter'></i>Twitter
                  </label>
                  <input
                    type='text'
                    id='agency_social_twitter'
                    value='www.twitter.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_social_linkedin'>
                    <i class='fa fa-linkedin'></i>Linkedin
                  </label>
                  <input
                    type='text'
                    id='agency_social_linkedin'
                    value='www.linkedin.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_social_google'>
                    <i class='fa fa-google'></i>Google Plus
                  </label>
                  <input
                    type='text'
                    id='agency_social_google'
                    value='www.google.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_social_instagram'>
                    <i class='fa fa-instagram'></i>Instagram
                  </label>
                  <input
                    type='text'
                    id='agency_social_instagram'
                    value='www.instagram.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_social_pinterest'>
                    <i class='fa fa-pinterest'></i>Pinterest
                  </label>
                  <input
                    type='text'
                    id='agency_social_pinterest'
                    value='www.pinterest.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_social_skype'>
                    <i class='fa fa-skype'></i>Skype
                  </label>
                  <input
                    type='text'
                    id='agency_social_skype'
                    value='www.skype.com'
                  />
                </div>
                <div class='col-md-6 col-12 mb-30'>
                  <label for='agency_social_tumblr'>
                    <i class='fa fa-tumblr'></i>Tumblr
                  </label>
                  <input
                    type='text'
                    id='agency_social_tumblr'
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

export default AgencyProfile;
