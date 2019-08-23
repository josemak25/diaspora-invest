import React from 'react';

import SignUpForm from './SignUpForm';
// import LoginForm from './LoginForm';

export default function LoginSignUp() {
	return (
		<>
			<div className='login-register-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 col-md-8 col-12 ml-auto mr-auto'>
							<ul className='login-register-tab-list nav'>
								<li>
									<a href='#login-tab' data-toggle='tab'>
										Login
									</a>
								</li>
								<li>or</li>
								<li>
									<a className='active' href='#register-tab' data-toggle='tab'>
										Register
									</a>
								</li>
							</ul>

							<div className='tab-content'>
								<div id='login-tab' className='tab-pane show '>
									{/* <LoginForm /> */}
								</div>
								<div id='register-tab' className='tab-pane show active'>
									<SignUpForm />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
