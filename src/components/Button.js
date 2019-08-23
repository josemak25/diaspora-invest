import React from 'react';
import styled from 'styled-components';

export default function Button({ textContent, testId, submit }) {
	return (
		<SimpleButton className='btn' data-testid={testId} type={submit ? 'submit' : null}>
			{textContent}
		</SimpleButton>
	);
}

const SimpleButton = styled.button`
	color: inherit;
	display: inline-block;
	line-height: inherit;
	text-decoration: none;
	cursor: pointer;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
`;
