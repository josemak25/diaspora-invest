import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp({ history }) {
	const [errors, setErrors] = useState({});

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
		setErrors({ ...errors, [name]: '' });
	};

	const check = e => {
		setIsChecked(e.target.checked);
	};

	const onSubmit = event => {
		event.preventDefault();

		const errorFields = {};

		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!values.name) {
			errorFields.name = 'Full name is required';
		}
		if (!values.email) {
			errorFields.email = 'Email is required';
		}
		if (!emailRegex.test(values.email)) {
			errorFields.email = 'Invalid email address';
		}
		if (!values.phone) {
			errorFields.phone = 'Phone is required';
		}
		if (!values.password) {
			errorFields.password = 'Password is required';
    }
    if (values.password.length < 6) {
			errorFields.password = 'Password must be at least 6 characters';
		}
		if (!values.password2) {
			errorFields.password2 = 'Confirm password is required';
		}
		if (values.password !== values.password2) {
			errorFields.password2 = 'Passwords must match';
		}
		if (isChecked === false) {
			errorFields.checkbox = 'accept terms and conditions';
		}

		if (Object.keys(errorFields).length > 0) {
			setErrors(errorFields);
			return;
		}

		axios
			.post('http://localhost:5000/api/v1/public/signup', values)
			.then(res => {
				if (res.data.statusCode !== 200) {
					setErrors(res.data.errors);
				}
				if (res.data.statusCode === 200) {
					alert(`Welcome ${res.data.payload.name}`);
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
				}
				// history.push('/properties');
			})
			.catch(err => {
				return err;
			});
	};

	return (
		<>
			<div className='login-register-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 col-md-8 col-12 ml-auto mr-auto'>
							<ul className='login-register-tab-list nav'>
								<li>
									<a className='active' href='/signup' data-toggle='tab'>
										Sign Up
									</a>
								</li>
							</ul>

							<div className='tab-content'>
								<div id='register-tab' className='tab-pane show active'>
									<form onSubmit={onSubmit}>
										<div className='row'>
											<div className='col-12 mb-30'>
												<input
													name='name'
													value={values.name}
													type='text'
													placeholder='Full Name'
													id='fullname'
													onChange={onChange}
												/>
												{errors.name ? (
													<label className='list-group-item-danger' htmlFor='fullname'>
														{errors.name}
													</label>
												) : null}
											</div>
											<div className='col-12 mb-30'>
												<input
													name='email'
													value={values.email}
													type='text'
													placeholder='you@example.com'
													id='email'
													onChange={onChange}
												/>
												{errors.email ? (
													<label className='list-group-item-danger' htmlFor='email'>
														{errors.email}
													</label>
												) : null}
											</div>
											<div className='col-12 mb-30'>
												<input
													name='phone'
													value={values.phone}
													type='text'
													placeholder='Phone'
													id='phone'
													onChange={onChange}
												/>
												{errors.phone ? (
													<label className='list-group-item-danger' htmlFor='phone'>
														{errors.phone}
													</label>
												) : null}
											</div>
											<div className='col-12 mb-30'>
												<input
													name='password'
													value={values.password}
													type='password'
													placeholder='Password'
													id='password'
													onChange={onChange}
												/>
												{errors.password ? (
													<label className='list-group-item-danger' htmlFor='password'>
														{errors.password}
													</label>
												) : null}
											</div>
											<div className='col-12 mb-30'>
												<input
													name='password2'
													value={values.password2}
													type='password'
													placeholder='Confirm Password'
													id='password2'
													onChange={onChange}
												/>
												{errors.password2 ? (
													<label className='list-group-item-danger' htmlFor='password2'>
														{errors.password2}
													</label>
												) : null}
											</div>
											<div className='col-12 mb-30'>
												<ul>
													<li>
														<input type='checkbox' id='accept_terms' checked={isChecked} onChange={check} />
														<label htmlFor='accept_terms'>
															I agree with your <a href='/'>Terms & Conditions</a>
														</label>
														{errors.checkbox ? (
															<label className='list-group-item-danger' htmlFor='accept_terms'>
																{errors.checkbox}
															</label>
														) : null}
													</li>
												</ul>
											</div>
											<div className='col-12 mb-30 '>
												<ul>
													<li>
														<input
															type='radio'
															name='user_type'
															value='investor'
															id='investor'
															checked={values.user_type === 'investor'}
															onChange={onChange}
														/>
														<label htmlFor='investor'>Investor</label>
													</li>
													<li>
														<input
															type='radio'
															name='user_type'
															value='seller'
															id='seller'
															checked={values.user_type === 'seller'}
															onChange={onChange}
														/>
														<label htmlFor='seller'>Seller</label>
													</li>
												</ul>
											</div>
											<div className='col-12'>
												<button className='btn'>Register</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
