export const loginValidator = (values, isChecked) => {
	const errorFields = {};

	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!values.email) {
		errorFields.email = 'Email is required';
	}
	if (!emailRegex.test(values.email)) {
		errorFields.email = 'Invalid email address';
	}
	if (!values.password) {
		errorFields.password = 'Password is required';
  }
  
	return errorFields;
};