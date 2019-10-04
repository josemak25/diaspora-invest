import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import Select from '../../components/select';
import AgentCard from '../../components/AgentCard';
import formatDate from '../../utils/formatDate';

export default function Agents({ options, agency_profiles }) {
  const [agent, setAgent] = useState('');

  const handleChange = ({ target }) => setAgent(target.value);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(agent);
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
          <span>{formatDate()}</span>
          <div />
        </div>
        <div className="main-body-agent-list">
          {agency_profiles.map((agent, i) => (
            <AgentCard key={i} agent={agent} />
          ))}
        </div>
      </main>
    </>
  );
}

Agents.defaultProps = {
  options: [{ value: 'approved', label: 'approved' }, { value: 'unapproved', label: 'unapproved' }],
  agency_profiles: [
    ...Array(20)
      .fill({})
      .map(() => ({
        id: '75c2a318-7844-46e5-af2e-6b555a2260e0',
        business_name: 'Webster.inc',
        isApproved: 1,
        approvedAt: '2019-09-28 11:46:52',
        documents: [
          {
            image:
              'http://elevenia.co/wp-content/uploads/2018/11/new-company-profile-format-for-it-simple-sample-template-pdf.jpg',
            name: 'corporate profile'
          },
          {
            image:
              'http://elevenia.co/wp-content/uploads/2018/11/new-company-profile-format-for-it-simple-sample-template-pdf.jpg',
            name: 'corporate profile'
          }
        ],
        phone: '+2349604222663',
        business_address: '752 Division Avenue, Cataract, New Mexico, 4454',
        email: 'webster@yahoo.com',
        user_id: '315cda29-69ba-4dc8-bf1e-f3a99948f55e',
        website: 'https://webster.io',
        avater: `https://randomuser.me/api/portraits/men/${Math.ceil(Math.random() * 100)}.jpg`,
        noOfProperties: Math.ceil(Math.random() * 1000)
      }))
  ]
};
