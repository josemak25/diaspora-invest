import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';

export default function Agents() {
  const [property, setProperties] = useState('');

  const handleChange = ({ target }) => setProperties(target.value);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(property);
  };

  return (
    <>
      <DashboardHeader
        placeholder="search a property by name"
        name="properties"
        value={property}
        handleSearchChange={handleChange}
        handleSubmitSearch={handleSubmit}
      />
    </>
  );
}
