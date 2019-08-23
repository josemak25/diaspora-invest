import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import SignUp from '../components/SignUp';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('<SignUp /> renders', () => {
	const { debug, getAllByText, getByText, getByPlaceholderText, queryByTestId } = render(<SignUp />);

	expect(getByText(/I agree with your/i)).not.toBeNull();
	expect(getAllByText(/Sign Up/i)).not.toBeNull();

	expect(getByPlaceholderText('Full Name').tagName).toBe('INPUT');
	expect(queryByTestId('signup-form')).toBeTruthy();
	// debug();
});

test('display all validation errors on submit', () => {
	const { debug, getByTestId, getByText } = render(<SignUp />);
	const signupButton = getByTestId('signup-button');

	expect(signupButton.tagName).toBe('BUTTON');
	expect(signupButton.textContent).toBe('Sign Up');

	fireEvent.click(signupButton);

	expect(getByTestId('name-error').textContent).toBe('Full name is required');
	expect(getByText(/Full name is required/i)).not.toBeNull();
	expect(getByText(/Invalid email address/i)).not.toBeNull();
	expect(getByText(/Phone is required/i)).not.toBeNull();
	expect(getByText(/Password must be at least 6 characters/i)).not.toBeNull();
	expect(getByText(/Confirm password is required/i)).not.toBeNull();
	expect(getByText(/accept terms and conditions/i)).not.toBeNull();
	// debug();
});

// test('Fill and submit form', () => {
// 	window.alert = jest.fn();
// 	const onSubmit = jest.fn();

// 	const { debug, getByLabelText, getByTestId, getByPlaceholderText } = render(<SignUp />);

// 	fireEvent.change(getByPlaceholderText('Full Name'), {
// 		target: { value: 'John Bosco' },
// 	});
// 	fireEvent.change(getByPlaceholderText('you@example.com'), {
// 		target: { value: 'johnbosco@joh.com' },
// 	});
// 	fireEvent.change(getByPlaceholderText('Phone'), {
// 		target: { value: '54678527' },
// 	});
// 	fireEvent.change(getByPlaceholderText('Password'), {
// 		target: { value: 'johnbosco' },
// 	});
// 	fireEvent.change(getByPlaceholderText('Confirm Password'), {
// 		target: { value: 'johnbosco' },
// 	});
// 	fireEvent.click(getByLabelText(/I agree with your/));
// 	fireEvent.click(getByLabelText(/Investor/));

// 	expect(getByLabelText(/I agree with your/).checked).toEqual(true);
//   expect(getByLabelText(/Investor/).checked).toEqual(true);
  
// 	debug(getByTestId('signup-form'));

// 	fireEvent.click(getByTestId('signup-button'));

// 	expect(onSubmit).toHaveBeenCalledTimes(1);
// 	expect(window.alert).toHaveBeenCalledTimes(1);
// 	expect(window.alert).toHaveBeenCalledWith(/Welcome/i);
// });
