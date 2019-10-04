import React from 'react';
import Select from 'react-select';

export default ({ options, placeholder }) => (
  <Select options={options} placeholder={placeholder} className="custom-filter-selector" />
);
