import React from 'react';
import { Link } from 'react-router-dom';

const TopAgents = ({ agent, socials }) => {
  return (
    <div className="sidebar-agent">
      <div className="image">
        <Link
          to={{
            pathname: `/agent/${agent.id}`,
            state: agent
          }}
        >
          <img src={agent.image} alt="" />
        </Link>
      </div>
      <div className="content">
        <h5 className="title">
          <Link
            to={{
              pathname: `/agent/${agent.id}`,
              state: agent
            }}
          >
            {agent.name}
          </Link>
        </h5>
        <p className="phone">{agent.phone}</p>
        <span className="properties">{agent.noOfProperties} Properties</span>
        <div className="social">
          {socials.map((social, index) => (
            <a
              href={social.path}
              rel="noopener noreferrer"
              target="_blank"
              className={social.class}
              key={index}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAgents;

TopAgents.defaultProps = {
  agent: {
    image: require('../../assets/images/agent/agent-1.jpg'),
    name: 'Donald Palmer',
    phone: '(756) 447 5779',
    noOfProperties: 7
  },
  socials: [
    { icon: 'fa fa-facebook', class: 'facebook', path: 'http://google.com' },
    { icon: 'fa fa-twitter', class: 'twitter', path: 'http://google.com' },
    { icon: 'fa fa-linkedin', class: 'linkedin', path: 'http://google.com' },
    { icon: 'fa fa-google-plus', class: 'google', path: 'http://google.com' }
  ]
};
