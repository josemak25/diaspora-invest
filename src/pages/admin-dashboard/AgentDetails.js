import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import DashboardHeader from './DashboardHeader';
import AgentLogo from '../../components/AgentLogo';

export default function AgentDetails({ location: { state }, detailsLinks, user }) {
  const {
    approvedAt,
    avater,
    business_address,
    business_name,
    documents,
    email,
    isApproved,
    noOfProperties,
    phone,
    user_id,
    website
  } = state;

  return (
    <>
      <DashboardHeader placeholder="search users by name" name="user" value={user} />

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
          <div className="agent-details-holder">
            <div className="agent-details-status">
              <div>
                <span>
                  <p>Created: {new Date().toJSON()}</p>
                  <p>Email: {email}</p>
                </span>
                <span className="agent-account-approval-status">
                  <p>status</p>
                  <p style={{ color: `${isApproved ? '#008e87' : 'red'}` }}>
                    {isApproved ? 'approved account' : 'unapproved account'}
                  </p>
                </span>
              </div>
              <div className="agent-account-completeness">
                <h3>agent account completeness check</h3>
                <div className="agent-account-completeness-chat">
                  <span>
                    <div>90%</div>
                  </span>
                  <img
                    src={require('../../assets/images/icons/shield.svg')}
                    alt="account-completeness-checker"
                  ></img>
                </div>
              </div>
            </div>
            <div className="agent-details-record">
              <div className="agent-details-record-container">
                <h3>agent details</h3>
                <div>
                  <span>name:</span>
                  <span>{user.name}</span>
                </div>
                <div>
                  <span>phone</span>
                  <span> {user.phone}</span>
                </div>
                <div>
                  <span>email:</span>
                  <span>{user.email}</span>
                </div>
                <div>
                  <span>email verified:</span> <span>{user.email_verified ? 'yes' : 'no'}</span>
                </div>
                <div>
                  <span>created:</span>
                  <span>{user.createdAt}</span>
                </div>
              </div>
              <div className="agent-details-record-container">
                <h3>agency details</h3>
                <div>
                  <span>name:</span>
                  <span>{business_name}</span>
                </div>
                <div>
                  <span>phone:</span>
                  <span>{phone}</span>
                </div>
                <div>
                  <span>email:</span>
                  <span>{email}</span>
                </div>
                <div>
                  <span>website:</span>
                  <span>{website}</span>
                </div>
                <div>
                  <span>approved date:</span>
                  <span>{approvedAt}</span>
                </div>
              </div>
              <div className="agent-details-record-container">
                <h3>property details</h3>
                <div>
                  <span> uploaded properties:</span>
                  <span> {noOfProperties}</span>
                </div>
                <div>
                  <span>sold properties:</span> <span>{noOfProperties}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="agent-details-top-properties"></div>
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
