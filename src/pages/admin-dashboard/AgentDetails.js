import React, { useState, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import { NavLink, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-regular-svg-icons";

import DashboardHeader from "./DashboardHeader";
import AgentLogo from "../../components/AgentLogo";
import Details from "./Details";
import { agenciesApproval } from '../../redux/actions/dashboard.action'


function AgentDetails({ location, detailsLinks, user, agenciesApproval }) {
  const { loading } = useSelector(({ dashboard }) => dashboard);
  const { state } = location;
  const { isApproved } = state;
  
  const [action, setAction] = useState("");

  const handleApproval = e => {
    const value = e.currentTarget.getAttribute("data-title");
    setAction(value);
  };

  useEffect(() => {
    agenciesApproval({ id: state.profile_id, action: action });
  }, [action]);

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
              <span>{state.business_name}</span>
            </div>
            <div className="agent-details-links">
              {detailsLinks.map((link, i) => (
                <NavLink
                  exact
                  to={{
                    pathname: `${location.pathname.substr(0, 16)}/${link.path}`,
                    state
                  }}
                  key={i}
                  activeClassName="active-agent-details-tab"
                >
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="agent-action-buttons">
            <span
              onClick={handleApproval}
              data-title={isApproved ? "unapprove" : "approve"}
            >
              <FontAwesomeIcon
                icon={isApproved ? faTimesCircle : faCheckCircle}
                size="2x"
                color={isApproved ? "red" : "#008e87"}
                className={isApproved ? 'agent-action-buttons-unapproved' : "agent-action-buttons-approve"}
              />
            </span>
          </div>
        </div>
        <div className="agent-details-body">
          <Route
            exact
            path={`/dashboard/agent/details`}
            render={props => <Details {...props} user={user} details={state} />}
          />
          <Route
            exact
            path={`/dashboard/agent/payments`}
            render={props => <Details {...props} user={user} details={state} />}
          />
          <Route
            exact
            path={`/dashboard/agent/properties`}
            render={props => <Details {...props} user={user} details={state} />}
          />
        </div>
      </main>
    </>
  );
}

const mapActionToProps = {
  agenciesApproval
}


export default connect(null, mapActionToProps)(AgentDetails);


AgentDetails.defaultProps = {
  detailsLinks: [
    {
      name: "Details",
      path: "details"
    },
    {
      name: "Payments",
      path: "payments"
    },
    {
      name: "Properties",
      path: "properties"
    }
  ],
  user: {
    id: "c128b53d-2e30-45d2-9f23-5d8627b49b20",
    avater: "https://placeimg.com/80/80/people",
    name: "Dixon David",
    email_verified: 1,
    phone: "+2349594353628",
    password: "password",
    email: "dixondavid@yahoo.com",
    user_type: "investor",
    createdAt: "2019-09-28 13:52:22",
    updatedAt: "2019-09-28 13:52:22"
  }
};
