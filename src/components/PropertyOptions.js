import React from 'react';
import Select from 'react-select';

function PropertyOptions({ options, selectedOption, handleSelected, placeholder }) {
  const selections = [...options.map(category => ({ value: category, label: category }))];

  return (
    <Select
      options={selections}
      value={selectedOption}
      onChange={handleSelected}
      defaultValue={{ value: '', label: `${placeholder}` }}
    />
  );
}

export default PropertyOptions;
