import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import loginUser from "../../redux/actions/login.action";
import { useSelector, connect } from "react-redux";
import { loginValidator } from "../../utils/loginValidator";
import Button from "../../components/Button";
import { Input, Label } from "../../components/Input";

function LoginForm(props) {
  const [errors, setErrors] = useState({});
  const { loading, error } = useSelector(state => state.auth);

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (error) setErrors({ ...errors, resError: error });
  }, [loading, error]);

  const onChange = ({ target: { name, value } }) => {
    setErrors({ ...errors, resError: "" });
    setValues({ ...values, [name]: value });
    // remove the error display once a value is entered
    setErrors({ ...errors, [name]: "" });
  };

  const navigateUser = () => {
    props.history.push("/properties");
  };

  const onSubmit = async event => {
    event.preventDefault();
    const errorFields = loginValidator(values);

    if (Object.keys(errorFields).length > 0) {
      setErrors(errorFields);
      return;
    }

    await props.login(values, navigateUser);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-12 mb-30">
          {errors.resError && (
            <div>
              <span className="error-message" style={{ fontSize: "100%" }}>
                {errors.resError}
              </span>
            </div>
          )}
        </div>
        <div className="col-12 mb-30">
          <Input
            name="email"
            value={values.email}
            type="text"
            placeholder="you@example.com"
            id="login-email"
            onChange={onChange}
            error={errors.email}
          />
        </div>
        <div className="col-12 mb-30">
          <Input
            name="password"
            value={values.password}
            type="password"
            placeholder="Password"
            id="login-password"
            onChange={onChange}
            error={errors.password}
          />
        </div>
        <div className="col-12 mb-30">
          <Button
            testId="login-button"
            textContent={loading ? "Loading" : "Login"}
            submit={true}
          />
        </div>

        <div className="col-12 d-flex justify-content-between">
          <span>
            New User to Diaspora Invest?&nbsp;
            <a className="register-toggle" href="#signup-tab">
              Sign Up!
            </a>
          </span>
          <span>
            <a href="forgot-password.html">Forgot Password ?</a>
          </span>
        </div>
      </div>
    </form>
  );
}


const mapActionsToProps = {
  login: loginUser
};

export default connect(
  null,
  mapActionsToProps
)(withRouter(LoginForm));
