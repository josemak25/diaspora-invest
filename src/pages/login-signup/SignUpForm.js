import React, { useState } from 'react';
import axios from 'axios';

import { signupValidator } from '../../utils/signupValidator';
import Button from '../../components/Button';
import { Input, Label } from '../../components/Input';
import '../../App.css';

export default function SignUpForm({ history, ...props }) {
	const [errors, setErrors] = useState({});
	const [loading, setLoader] = useState(false);
	const [success, setSuccess] = useState(false);

	const [isChecked, setIsChecked] = useState(false);

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
		phone: '',
		user_type: 'investor',
	});

	const onChange = ({ target: { name, value } }) => {
		setValues({ ...values, [name]: value });

		// remove the error display once a value is entered
		setErrors({ ...errors, [name]: '' });
	};

	const check = e => {
		setIsChecked(e.target.checked);
		setErrors({ ...errors, checkbox: '' });
	};

	const onSubmit = event => {
		event.preventDefault();

		const errorFields = signupValidator(values, isChecked);

		if (Object.keys(errorFields).length > 0) {
			setErrors(errorFields);
			return;
		}
		setLoader(true);
		axios
			.post('auth/signup', values)
			.then(res => {
				if (res.data.statusCode !== 200) {
					setErrors(res.data.errors);
				}
				if (res.data.statusCode === 200) {
					setSuccess(true)
					setValues({
						name: '',
						email: '',
						password: '',
						password2: '',
						phone: '',
						user_type: 'investor',
					});

					setErrors({});

					setIsChecked(false);
					setLoader(false);
				}
			})
			.catch(err => {
				return err;
			});
	};

	return (
    <form onSubmit={onSubmit} data-testid="signup-form">
      <div className="row">
        <div className="col-12 mb-30">
          <Input
            data-testid="input-name"
            name="name"
            value={values.name}
            type="text"
            placeholder="Full Name"
            id="fullname"
            onChange={onChange}
            error={errors.name}
          />
        </div>
        <div className="col-12 mb-30">
          <Input
            name="email"
            value={values.email}
            type="text"
            placeholder="you@example.com"
            id="email"
            onChange={onChange}
            error={errors.email}
          />
        </div>
        <div className="col-12 mb-30">
          <Input
            name="phone"
            value={values.phone}
            type="text"
            placeholder="Phone"
            id="phone"
            onChange={onChange}
            error={errors.phone}
          />
        </div>
        <div className="col-12 mb-30">
          <Input
            name="password"
            value={values.password}
            type="password"
            placeholder="Password"
            id="password"
            onChange={onChange}
            error={errors.password}
          />
        </div>
        <div className="col-12 mb-30">
          <Input
            name="password2"
            value={values.password2}
            type="password"
            placeholder="Confirm Password"
            id="password2"
            onChange={onChange}
            error={errors.password2}
          />
        </div>
        <div className="col-12 mb-30">
          <ul>
            <li>
              <Input
                type="checkbox"
                id="accept_terms"
                checked={isChecked}
                onChange={check}
              />
              <Label htmlFor="accept_terms">
                I agree with your <a href="/">Terms & Conditions</a>
              </Label>
            </li>
          </ul>
          {errors.checkbox && (
            <div>
              <span
                className="error-message"
                style={{ fontSize: "70%" }}
              >
                Please accept terms and conditions
              </span>
            </div>
          )}
        </div>
        <div className="col-12 mb-30 ">
          <ul>
            <li>
              <Input
                type="radio"
                name="user_type"
                value="investor"
                id="investor"
                checked={values.user_type === "investor"}
                onChange={onChange}
              />
              <Label htmlFor="investor">Investor</Label>
            </li>
            <li>
              <Input
                type="radio"
                name="user_type"
                value="seller"
                id="seller"
                checked={values.user_type === "seller"}
                onChange={onChange}
              />
              <Label htmlFor="seller">Seller</Label>
            </li>
          </ul>
        </div>
        {success && (
          <div className="nav d-flex justify-content-end col-12 mb-0 pl-15 pr-15">
            <div className="alert alert-success pb-0 pt-0" role="alert">
              Your account has been created... &#10; Check your email to verify
              your account
            </div>
          </div>
        )}
        <div className="col-12">
          <Button
            testId="signup-button"
            textContent={
              loading ? (
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Sign Up"
              )
            }
            submit={true}
          />
        </div>
      </div>
    </form>
  );
}
