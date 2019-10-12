import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";


import DashboardHeader from './DashboardHeader';
import Select from '../../components/select';
import AgentCard from '../../components/AgentCard';
import { formatAgentListsDate } from '../../utils/formatDate';

export default function Agents({ options, agency_profiles }) {
  const { agencies, loading } = useSelector(({ dashboard }) => dashboard);

  const [agent, setAgent] = useState('');
  const handleChange = ({ target }) => setAgent(target.value);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <DashboardHeader
        placeholder="search by agent name"
        name="agent"
        value={agent}
        handleSearchChange={handleChange}
        handleSubmitSearch={handleSubmit}
      />
      <main className="main-body-container">
        <div className="filter-agents">
          <Select options={options} placeholder="Filter Agents" />
        </div>
        <div className="current-time-date">
          <span>{formatAgentListsDate()}</span>
          <div />
        </div>
        <div className="main-body-agent-list">
          {!loading && agencies.map((agent, i) => (
            <AgentCard key={i} agent={agent} />
          ))}
        </div>
      </main>
    </>
  );
}

Agents.defaultProps = {
  options: [{ value: 'approved', label: 'approved' }, { value: 'unapproved', label: 'unapproved' }]
};
