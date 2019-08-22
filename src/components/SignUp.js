import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp({ history }) {
	const [errors, setErrors] = useState({});

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
	};

	const onSubmit = event => {
		event.preventDefault();

		if (!values.name) {
			return setErrors({ name: 'Name must not be empty' });
		} else if (!values.email) {
			return setErrors({ email: 'Email must not be empty' });
		} else if (!values.password) {
			return setErrors({ password: 'Password must not be empty' });
		} else if (!values.password2) {
			return setErrors({ password2: 'Confirm password must not be empty' });
		} else if (values.password !== values.password2) {
			return setErrors({ password2: 'Passwords must match' });
		} else if (!values.phone) {
			return setErrors({ phone: 'Phone must not be empty' });
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
				}
				// history.push('/properties');
			})
			.catch(err => {
				console.log(err);
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
													onChange={onChange}
												/>
											</div>
											<div className='col-12 mb-30'>
												<input name='email' value={values.email} type='email' placeholder='Email' onChange={onChange} />
											</div>
											<div className='col-12 mb-30'>
												<input name='phone' value={values.phone} type='text' placeholder='Phone' onChange={onChange} />
											</div>
											<div className='col-12 mb-30'>
												<input
													name='password'
													value={values.password}
													type='password'
													placeholder='Password'
													onChange={onChange}
												/>
											</div>
											<div className='col-12 mb-30'>
												<input
													name='password2'
													value={values.password2}
													type='password'
													placeholder='Confirm Password'
													onChange={onChange}
												/>
											</div>
											<div className='col-12 mb-30'>
												<ul>
													<li>
														<input type='checkbox' id='register_agree' onChange={onChange} />
														<label htmlFor='register_agree'>
															I agree with your <a href='/'>Terms & Conditions</a>
														</label>
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
									{Object.keys(errors).length > 0 && (
										<div>
											<ul className='list-group'>
												{Object.values(errors).map((error, index) => (
													<li className='list-group-item list-group-item-danger' key={index}>
														{error}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
