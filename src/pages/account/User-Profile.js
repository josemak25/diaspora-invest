import React, { useState } from "react";

import { useSelector, connect } from 'react-redux';

import { Input } from '../../components/Input';
import Button from '../../components/Button';

import { editUserDetails } from "../../redux/actions/account.action";

const UserProfile = (props) => {
  const { id, name, email, phone } = useSelector(({ auth }) => auth.user);

  const [values, setValues] = useState(() => {
    if ( localStorage.getItem('user') ) {
      const { id, name, phone, email } = JSON.parse(localStorage.getItem('user'));
      return { name, phone, email, id }; 
    }
    return { name, phone, id }
  });

  const onChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    props.editUserDetails({ values });
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
                    readOnly
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
  editUserDetails
}

export default connect(null, mapActionsToProps)(UserProfile);
