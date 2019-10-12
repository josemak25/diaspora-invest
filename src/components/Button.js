import React from 'react';
import styled from 'styled-components';

export default function Button({ textContent, testId, submit, disabled = false, moreStyle = '' }) {
  return (
    <SimpleButton
      className={'btn' + ' ' + moreStyle}
      data-testid={testId}
      type={submit ? 'submit' : null}
      disabled={disabled}
    >
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

  &:hover {
    background-color: #00b687;
  }
`;
