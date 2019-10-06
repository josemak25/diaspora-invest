import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";

import { editAgencyProfileDetails } from '../../redux/actions/account.action';

import { Input } from '../../components/Input';
import Button from '../../components/Button';

const AgencyProfile = ({ editAgency }) => {
  const { business_name, phone, website, business_address, id, email } = useSelector(
    ({ account }) => account
  );

  const [values, setValues] = useState(() => {
    if (localStorage.getItem("agency")) {
      const { business_name, phone, website, business_address, id, email } = JSON.parse(
        localStorage.getItem("agency")
      );
      return { business_name, phone, website, business_address, id, email };
    }
    return { business_name, phone, website, business_address, id, email };
  });

  const onChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    editAgency({ values });
  };

  return (
    <>
      <div id="agency-tab" className="tab-pane">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-12 mb-30">
              <h3 className="mb-0">Agency Profile</h3>
            </div>
            <div className="col-12 mb-30">
              <label htmlFor="agency_name">Agency Name</label>
              <Input
                type="text"
                name="business_name"
                id="agency_name"
                value={values.business_name}
                onChange={onChange}
              />
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-md-6 col-12 mb-30">
                  <label htmlFor="agency_address">Address</label>
                  <Input
                    type="text"
                    name="business_address"
                    id="agency_address"
                    value={values.business_address}
                    onChange={onChange}
                  />
                </div>
                <div className="col-md-6 col-12 mb-30">
                  <label htmlFor="agency_number">Phone Number</label>
                  <Input
                    type="text"
                    name="phone"
                    id="agency_number"
                    value={values.phone}
                    onChange={onChange}
                  />
                </div>
                <div className="col-md-6 col-12 mb-30">
                  <label htmlFor="agency_email">Email</label>
                  <Input
                    type="text"
                    id="agency_email"
                    name="email"
                    value={email || values.email}
                    readOnly
                  />
                </div>
                <div className="col-md-6 col-12 mb-30">
                  <label htmlFor="agency_web">Website</label>
                  <Input
                    type="text"
                    name="website"
                    id="agency_web"
                    value={values.website}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 mb-30">
              <Button textContent="Save Changes" submit="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const mapActionsToProps = {
  editAgency: editAgencyProfileDetails
};

export default connect(null, mapActionsToProps)(AgencyProfile);

AgencyProfile.defaultProps = {
  details: {
    name: 'Brains & Hammers',
    email: 'customerservice@brainsandhammers.com',
    address: '112A Olabode George, Off Ajose Adeogun, Victoria Island, Lagos',
    phone: '08023456789',
    website: 'www.brainsandhammers.com'
  }
};
