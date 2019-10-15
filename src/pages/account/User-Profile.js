import React, { useState } from "react";

import { useSelector, connect } from 'react-redux';

import { Input } from '../../components/Input';
import Button from '../../components/Button';

import { validateProfileFields } from '../../utils/editProfile';

import { editUserDetails } from "../../redux/actions/account.action";

const UserProfile = (props) => {
  const { user: {id, name, email, phone}, loading } = useSelector(({ auth }) => auth);

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState(() => {
    if ( localStorage.getItem('user') ) {
      const { id, name, phone, email } = JSON.parse(localStorage.getItem('user'));
      return { name, phone, email, id }; 
    }
    return { name, phone, id, email };
  });

  const onChange = ({ target: { name, value } }) => {
    setErrors({ ...errors, [name]: "" });
    setValues({ ...values, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();

    const formIsValid = validateProfileFields(values);

    if (Object.keys(formIsValid).length) {
      setErrors(formIsValid);
      return;
    }

    props.editUserDetails({ values });

    setErrors({});
  };

  return (
    <>
      <div id="profile-tab" className="tab-pane show active">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-12 mb-30">
              <h3 className="mb-0">Personal Profile</h3>
            </div>
            <div className="col-12 mb-30">
              <label htmlFor="name">Name</label>
              <Input
                name="name"
                type="text"
                id="name"
                value={values.name}
                onChange={onChange}
                error={errors.name}
                errorMessage="Name must be more than three characters"
              />
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-6 col-12 mb-30">
                  <label htmlFor="personal_email">Email Address</label>
                  <Input
                    name="email"
                    type="text"
                    id="personal_email"
                    value={email || values.email}
                    readOnly={true}
                  />
                </div>
                <div className="col-md-6 col-12 mb-30">
                  <label htmlFor="personal_number">Phone Number</label>
                  <Input
                    name="phone"
                    type="text"
                    id="personal_number"
                    value={values.phone}
                    onChange={onChange}
                    error={errors.phone}
                    errorMessage="Phone number must be valid"
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
  editUserDetails
}

export default connect(null, mapActionsToProps)(UserProfile);
