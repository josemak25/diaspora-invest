import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { signupValidator } from '../../utils/signupValidator';
import Button from '../../components/Button';
import { Input, Label } from '../../components/Input';
import '../../App.css';

export default function LoginForm() {
  const [errors, setErrors] = useState({});

  const [isChecked, setIsChecked] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const onChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const check = e => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = event => {
    event.preventDefault();

    const { errorFields } = signupValidator(values, isChecked);

    if (Object.keys(errorFields).length > 0) {
      setErrors(errorFields);
      return;
    }

    axios.post('/public/login', values);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-12 mb-30">
          <Input
            name="email"
            value={values.email}
            type="text"
            placeholder="you@example.com"
            id="login-email"
            onChange={onChange}
          />
          {errors.email ? (
            <Label
              useFor="validation_error"
              className="list-group-item-danger"
              htmlFor="login-email"
            >
              {errors.email}
            </Label>
          ) : null}
        </div>
        <div className="col-12 mb-30">
          <Input
            name="password"
            value={values.password}
            type="password"
            placeholder="Password"
            id="login-password"
            onChange={onChange}
          />
          {errors.password ? (
            <Label
              useFor="validation_error"
              className="list-group-item-danger"
              htmlFor="login-password"
            >
              {errors.password}
            </Label>
          ) : null}
        </div>
        <div className="col-12 mb-30">
          <ul>
            <li>
              <Input type="checkbox" id="login_remember" checked={isChecked} onChange={check} />
              <Label htmlFor="login_remember">Remember me</Label>
            </li>
          </ul>
        </div>
        <div className="col-12 mb-30">
          <Button testId="login-button" textContent="Login" submit={true} />
        </div>

        <div className="col-12 d-flex justify-content-between">
          <span>
            New User to Diaspora Invest?&nbsp;
            <p className="register-toggle" data-toggle="tab">
              Register!
            </p>
          </span>
          <span>
            <Link to="/forgot-password">Forgot Password ?</Link>
          </span>
        </div>
      </div>
    </form>
  );
}
