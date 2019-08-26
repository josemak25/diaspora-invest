import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { loginValidator } from '../../utils/loginValidator';
import Button from '../../components/Button';
import { Input, Label } from '../../components/Input';

export default function LoginForm() {
	const [errors, setErrors] = useState({});

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const onChange = ({ target: { name, value } }) => {
		setValues({ ...values, [name]: value });
		// remove the error display once a value is entered
		setErrors({ ...errors, [name]: '' });
	};

	const onSubmit = event => {
		event.preventDefault();

		const errorFields = loginValidator(values);

		if (Object.keys(errorFields).length > 0) {
			setErrors(errorFields);
			return;
		}

		axios
			.post('/public/login', values)
			.then(res => {
				if (res.data.statusCode !== 200) {
					setErrors(res.data.errors);
					alert(res.data.errors.error);
				}
				if (res.data.statusCode === 200 && res.data.token) {
					const { payload, token } = res.data;

					alert(`Welcome back ${payload.name}`);

					setValues({
						email: '',
						password: '',
					});

					localStorage.setItem('jwtToken', token);

					const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
					// console.log(decodedToken);

					setErrors({});
				}
			})
			.catch(err => {
				return err;
			});
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-12 mb-30'>
					<Input
						name='email'
						value={values.email}
						type='text'
						placeholder='you@example.com'
						id='login-email'
						onChange={onChange}
					/>
					{errors.email ? (
						<Label useFor='validation_error' className='list-group-item-danger' htmlFor='login-email'>
							{errors.email}
						</Label>
					) : null}
				</div>
				<div className='col-12 mb-30'>
					<Input
						name='password'
						value={values.password}
						type='password'
						placeholder='Password'
						id='login-password'
						onChange={onChange}
					/>
					{errors.password ? (
						<Label useFor='validation_error' className='list-group-item-danger' htmlFor='login-password'>
							{errors.password}
						</Label>
					) : null}
				</div>
				<div className='col-12 mb-30'>
					<Button testId='login-button' textContent='Login' submit={true} />
				</div>

				<div className='col-12 d-flex justify-content-between'>
					<span>
						New User to Diaspora Invest?&nbsp;
						<a className='register-toggle' href='#register-tab'>
							Register!
						</a>
					</span>
					<span>
						<a href='forgot-password.html'>Forgot Password ?</a>
					</span>
				</div>
			</div>
		</form>
	);
}
