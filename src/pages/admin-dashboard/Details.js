import React from 'react';
import { formatAgentDetailsDate } from '../../utils/formatDate';

export default function Details({ details, user }) {
  const {
    approvedAt,
    business_name,
    documents,
    email,
    isApproved,
    noOfProperties,
    phone,
    website,
    createdAt
  } = details;
  return (
    <>
      <div className="agent-details-holder">
        <div className="agent-details-status">
          <div>
            <span>
              <p>Created: {formatAgentDetailsDate(createdAt)}</p>
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
              <span>{formatAgentDetailsDate(user.createdAt)}</span>
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
              <span>{formatAgentDetailsDate(approvedAt)}</span>
            </div>
          </div>
          <div className="agent-details-record-container">
            <h3>property details</h3>
            <div>
              <span>uploaded properties:</span>
              <span>{noOfProperties}</span>
            </div>
            <div>
              <span>sold properties:</span> <span>{noOfProperties}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="agent-details-top-properties"></div>
    </>
  );
}
