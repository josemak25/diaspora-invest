import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';

export default function Users() {
  const [agent, setAgent] = useState('');

  const handleChange = ({ target }) => setAgent(target.value);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(agent);
  };

  return (
    <>
      <DashboardHeader
        placeholder="search agent by name"
        name="user"
        value={agent}
        handleSearchChange={handleChange}
        handleSubmitSearch={handleSubmit}
      />
    </>
  );
}
