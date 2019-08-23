import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import SignUpForm from '../pages/login-signup/SignUpForm';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('<SignUpForm /> renders', () => {
	const { getAllByText, getByText, getByPlaceholderText, queryByTestId } = render(<SignUpForm />);

	expect(getByText(/I agree with your/i)).not.toBeNull();
	expect(getAllByText(/Sign Up/i)).not.toBeNull();

	expect(getByPlaceholderText('Full Name').tagName).toBe('INPUT');
	expect(queryByTestId('signup-form')).toBeTruthy();
});

test('display all validation errors on submit', () => {
	const { getByTestId, getByText } = render(<SignUpForm />);
	const signupButton = getByTestId('signup-button');

	expect(signupButton.tagName).toBe('BUTTON');
	expect(signupButton.textContent).toBe('Sign Up');

	fireEvent.click(signupButton);

	expect(getByText(/Full name is required/i)).not.toBeNull();
	expect(getByText(/Invalid email address/i)).not.toBeNull();
	expect(getByText(/Phone is required/i)).not.toBeNull();
	expect(getByText(/Password must be at least 6 characters/i)).not.toBeNull();
	expect(getByText(/Confirm password is required/i)).not.toBeNull();
	expect(getByText(/accept terms and conditions/i)).not.toBeNull();
});

test('Fill signup form', () => {
	const { getByLabelText, getByPlaceholderText } = render(<SignUpForm />);

	fireEvent.change(getByPlaceholderText('Full Name'), {
		target: { value: 'John Bosco' },
	});

	expect(getByPlaceholderText('Full Name').value).toBe('John Bosco');

	fireEvent.click(getByLabelText(/I agree with your/));

	fireEvent.click(getByLabelText(/Investor/));

	expect(getByLabelText(/I agree with your/).checked).toEqual(true);
	expect(getByLabelText(/Investor/).checked).toEqual(true);
});
