import React from 'react';
import styled from 'styled-components';

export const Input = ({ name, value, type, placeholder, id, onChange, checked }) => {
  return (
    <SimpleInput
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      checked={checked}
    />
  );
};

export const TextArea = ({ name, value, id, onChange }) => {
  return <SimpleTextArea name={name} value={value} id={id} onChange={onChange} />;
};

export const Label = ({ htmlFor, children, className, useFor }) => {
  return (
    <SimpleLabel
      htmlFor={htmlFor}
      className={className}
      style={useFor === 'validation_error' ? { padding: '5px' } : null}
    >
      {children}
    </SimpleLabel>
  );
};

const SimpleLabel = styled.label``;

const SimpleInput = styled.input`
  /* color: inherit;
	display: inline-block;
	line-height: inherit;
	text-decoration: none;
	cursor: pointer;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s; */
`;

const SimpleTextArea = styled.textarea`
  /* color: inherit;
	display: inline-block;
	line-height: inherit;
	text-decoration: none;
	cursor: pointer;
	-webkit-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s; */
`;
