import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import DashboardHeader from './DashboardHeader';
import AgentLogo from '../../components/AgentLogo';
import Details from './Details';

export default function AgentDetails({ location: { state }, detailsLinks, user }) {
  const { business_name } = state;

  return (
    <>
      <DashboardHeader placeholder="search users by name" name="user" />
      <main className="agent-details-container">
        <div className="agent-approve-action">
          <div className="agent-approve-header">
            <div className="agent-company-logo">
              <span>
                <AgentLogo color="#333333" />
              </span>
              <span>{business_name}</span>
            </div>
            <div className="agent-details-links">
              {detailsLinks.map((link, i) => (
                <NavLink to={link.path} key={i} activeClassName="active-agent-details-tab">
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="agent-action-buttons">
            <span>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="2x"
                color="#008e87"
                className="agent-action-buttons-approve"
              />
              <FontAwesomeIcon
                icon={faTimesCircle}
                size="2x"
                color="red"
                className="agent-action-buttons-unapproved"
              />
            </span>
          </div>
        </div>
        <div className="agent-details-body">
          <Route
            exact
            path="/dashboard/agent/:id"
            render={props => <Details {...props} user={user} details={state} />}
          />
        </div>
      </main>
    </>
  );
}

AgentDetails.defaultProps = {
  detailsLinks: [
    {
      name: 'Details',
      path: `${window.location.pathname}`
    },
    {
      name: 'Payments',
      path: `${window.location.pathname}/payments`
    },
    {
      name: 'Properties',
      path: `${window.location.pathname}/properties`
    }
  ],
  user: {
    id: 'c128b53d-2e30-45d2-9f23-5d8627b49b20',
    avater: 'https://placeimg.com/80/80/people',
    name: 'Dixon David',
    email_verified: 1,
    phone: '+2349594353628',
    password: 'password',
    email: 'dixondavid@yahoo.com',
    user_type: 'investor',
    createdAt: '2019-09-28 13:52:22',
    updatedAt: '2019-09-28 13:52:22'
  }
};