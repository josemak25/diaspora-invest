import React from 'react';
import Agent from './Agent';

const AgentList = ({ agents }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-60 mb-xs-30">
          <div className="section-title center">
            <h1>Our Agents</h1>
          </div>
        </div>
      </div>
      <div className="row">
        {agents.map((agent, i) => (
          <Agent key={i} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentList;
