import React from 'react';
import { Link } from 'react-router-dom';

export default function AgentCard({ agent }) {
  return (
    <Link
      to={{
        pathname: `/dashboard/agent/${agent.id}`,
        state: agent
      }}
      className="agent-card-container"
    >
      <div className="agent-card-header">
        <img src={require('../assets/images/icons/agent-logo.svg')} alt="agent-company-logo" />
        <div>
          <h1>{agent.noOfProperties}</h1>
          <p>number of properties</p>
        </div>
      </div>
      <div className="agent-card-footer">
        <img src={agent.avater} alt="agent-avater" />
        <div>
          <span className="agent-card-footer-business_name">{agent.business_name}</span>
          <span className="agent-card-footer-email">{agent.email}</span>
        </div>
      </div>
    </Link>
  );
}
