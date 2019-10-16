import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";

import { editAgencyProfileDetails } from '../../redux/actions/account.action';

import { validateAgencyProfileFields } from '../../utils/editProfile';
import _ from '../../utils/isEqual';

import { Input } from '../../components/Input';
import Button from '../../components/Button';

const AgencyProfile = ({ editAgency }) => {
  const { agencyProfile: { business_name, phone, website, business_address, id, email }, loading } = useSelector(
    ({ account }) => account
  );

  const formData = { business_name, phone, website, business_address, id, email }

  const [values, setValues] = useState(() => {
    if (localStorage.getItem("agency")) {
      const { business_name, phone, website, business_address, id, email } = JSON.parse(
        localStorage.getItem("agency")
      );
      return { business_name, phone, website, business_address, id, email };
    }
    return { business_name, phone, website, business_address, id, email };
  });

  const [errors, setErrors] = useState({});

  const onChange = ({ target: { name, value } }) => {
    setErrors({ ...errors, [name]: "" });
    setValues({ ...values, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const formIsValid = validateAgencyProfileFields(values);
    if (Object.keys(formIsValid).length) {
      setErrors(formIsValid);
      return;
    }

    editAgency({ values });
  };

  const diff = _.isEqual(values, formData);

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
                error={errors.business_name}
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
                    error={errors.business_address}
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
                    error={errors.phone}
                    errorMessage="Phone number must be valid"
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
                    error={errors.website}
                  />
                </div>
              </div>
            </div>
            {loading && (
              <div className="col-12 mb-15 mt-0">
                <div className="alert alert-success pb-0 pt-0" role="alert">
                  Update Successful !!!
                </div>
              </div>
            )}
            <div className="col-12 mb-30">
              <Button
                disabled={diff}
                submit="submit"
                textContent={
                  loading ? (
                    <div className="spinner-border text-success" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Save Changes"
                  )
                }
                moreStyle="property-submit"
              />
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

