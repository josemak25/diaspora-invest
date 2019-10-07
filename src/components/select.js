import React from "react";
import Select from "react-select";

export default ({ options, placeholder, onChange, value, error, title }) => (
  <>
    <Select
      options={options}
      placeholder={placeholder}
      className="custom-filter-selector"
      defaultValue={value}
      onChange={onChange}
    />
    {error && <span className="error-message">{title} is required*</span>}
  </>
);
