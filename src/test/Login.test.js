import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import LoginForm from '../pages/login-signup/LoginForm';


afterEach(cleanup);

test('<LoginForm /> renders', () => {
	const { getAllByText, getByText } = render(<LoginForm />);

	expect(getByText(/New User to Diaspora Invest?/i)).not.toBeNull();
	expect(getAllByText(/Login/i)).not.toBeNull();
});

test('display all validation errors on submit', () => {
	const { getByTestId, getByText } = render(<LoginForm />);
	const loginButton = getByTestId('login-button');

	expect(loginButton.tagName).toBe('BUTTON');
	expect(loginButton.textContent).toBe('Login');

	fireEvent.click(loginButton);

	expect(getByText(/Invalid email address/i)).not.toBeNull();
});

test('Fill login form', () => {
	const { getByPlaceholderText } = render(<LoginForm />);

	fireEvent.change(getByPlaceholderText('you@example.com'), {
		target: { value: 'marybliss@yma.com' },
	});

	expect(getByPlaceholderText('you@example.com').value).toBe('marybliss@yma.com');
});
