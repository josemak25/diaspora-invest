import React from "react";
import { Link } from "react-router-dom";

const Agent = ({ agent }) => {
  return (
    <div className="col">
      <div className="agent">
        <div className="image">
          <Link
            className="img"
            to={{
              pathname: `/agent/${agent.id}`
            }}
          >
            <img src={agent.image} alt="agent_details" />
          </Link>
        </div>
        <div className="content">
          <h4 className="title">
            <Link
              className="img"
              to={{
                pathname: `/agent/${agent.id}`
              }}
            >
              {agent.name}
            </Link>
          </h4>
          <div className="phone">{agent.phone}</div>
          <div className="email">{agent.email}</div>
          <span className="properties">{agent.noOfProperties}</span>
        </div>
      </div>
    </div>
  );
};

export default Agent;
