import React from "react";
import Select from "react-select";

export default ({ options, placeholder, onChange, value }) => (
  <Select
    options={options}
    placeholder={placeholder}
    className="custom-filter-selector"
    defaultValue={value}
    onChange={onChange}
  />
);
