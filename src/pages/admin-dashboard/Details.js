import React from 'react';
import moment from "moment";

export default function Details({ details, user }) {
  const {
    profile_id,
    noOfProperties,
    noOfPropertiesSold,
    user_id,
    business_name,
    business_address,
    website,
    isApproved,
    approvedAt,
    profile_phone,
    profile_email,
    createdAt,
    documents,
    user_name,
    user_type,
    email_verified,
    user_email,
    user_phone,
    avatar
  } = details;

  return (
    <>
      <div className="agent-details-holder">
        <div className="agent-details-status">
          <div>
            <span>
              <p>Created: {moment(Date.now()).format("ll")}</p>
              <p>Email: {profile_email}</p>
            </span>
            <span className="agent-account-approval-status">
              <p>status</p>
              <p style={{ color: `${isApproved ? "#008e87" : "red"}` }}>
                {isApproved ? "approved account" : "unapproved account"}
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
                src={require("../../assets/images/icons/shield.svg")}
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
              <span>{user_name}</span>
            </div>
            <div>
              <span>phone</span>
              <span> {user_phone}</span>
            </div>
            <div>
              <span>email:</span>
              <span>{user_email}</span>
            </div>
            <div>
              <span>email verified:</span>{" "}
              <span>{email_verified ? "yes" : "no"}</span>
            </div>
            <div>
              <span>created:</span>
              <span>{moment(createdAt).format("ll")}</span>
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
              <span>{profile_phone}</span>
            </div>
            <div>
              <span>email:</span>
              <span>{profile_email}</span>
            </div>
            <div>
              <span>website:</span>
              <span>{website}</span>
            </div>
            <div>
              <span>approved date:</span>
              <span>{moment(approvedAt).format("ll")}</span>
            </div>
          </div>
          <div className="agent-details-record-container">
            <h3>property details</h3>
            <div>
              <span>uploaded properties:</span>
              <span>{noOfProperties}</span>
            </div>
            <div>
              <span>sold properties:</span> <span>{noOfPropertiesSold}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="agent-details-top-properties"></div>
    </>
  );
}
