import React from 'react';
import styled from 'styled-components';

export const Input = ({ name, defaultValue, value, type, placeholder, id, onChange, checked, error, readOnly=false, errorMessage=false }) => {
  return (
    <>
      <SimpleInput
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        checked={checked}
        readOnly={readOnly}
      />
      {error && (<span className="error-message">{errorMessage ? errorMessage : (`${name} is required*`)}</span>)}
    </>
  );
};

export const TextArea = ({ name, value, id, onChange, error }) => {
  return (
    <>
      <SimpleTextArea name={name} value={value} id={id} onChange={onChange} />{" "}
      {error && <span className="error-message"
      >{name} is required*</span>}
    </>
  );
};

export const Label = ({ htmlFor, children, className, useFor }) => {
  return (
    <>
      <SimpleLabel
        htmlFor={htmlFor}
        className={className}
        style={useFor === "validation_error" ? { padding: "5px" } : null}
      >
        {children}
      </SimpleLabel>
    </>
  );
};

const SimpleLabel = styled.label``;

const SimpleInput = styled.input``;

const SimpleTextArea = styled.textarea``;
