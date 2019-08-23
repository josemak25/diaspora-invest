export const signupValidator = (values, isChecked) => {
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

	return errorFields;
};
