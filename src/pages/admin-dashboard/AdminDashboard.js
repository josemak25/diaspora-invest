import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import '../../assets/css/admin-dashboard.css';
import Agents from './Agents';
import Users from './Users';
import Properties from './Properties';
import AgentDetails from './AgentDetails';

export default function AdminDashboard({ sidebarLinks, history: { location } }) {
  const { user } = useSelector(({ auth }) => auth);

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="dashboard-admin-profile">
          <img src={user.avatar} alt="admin-profile-avater"></img>
          <span>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </span>
        </div>
        <div className="dashboard-links">
          {sidebarLinks.map((link, i) => (
            <NavLink exact to={link.path} key={i} activeClassName="active-sidebar-link">
              <img src={link.icon} alt="dashboard-icons" className="dashboard-icon-img"></img>
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div
        className={
          location.pathname === '/dashboard/agent/details'
            ? 'dashboard-main-details-container'
            : 'dashboard-main-container'
        }
      >
        <Route exact path="/dashboard" component={Agents} />
        <Route path="/dashboard/agent" component={AgentDetails} />
        <Route exact path="/dashboard/users" component={Users} />
        <Route exact path="/dashboard/properties" component={Properties} />
      </div>
    </div>
  );
}

AdminDashboard.defaultProps = {
  sidebarLinks: [
    {
      icon: require('../../assets/images/icons/dashboard.svg'),
      path: '/dashboard',
      name: 'Agents'
    },
    {
      icon: require('../../assets/images/icons/users.svg'),
      path: '/dashboard/users',
      name: 'Users'
    },
    {
      icon: require('../../assets/images/icons/properties.svg'),
      path: '/dashboard/properties',
      name: 'Properties'
    },
    {
      icon: require('../../assets/images/icons/logout.svg'),
      path: '/',
      name: 'Log out'
    }
  ]
};
