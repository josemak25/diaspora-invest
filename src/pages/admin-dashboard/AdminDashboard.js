import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../../assets/css/admin-dashboard.css';
import Agents from './Agents';
import Users from './Users';
import Properties from './Properties';
import AgentDetails from './AgentDetails';

export default function AdminDashboard({ user, sidebarLinks }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="dashboard-admin-profile">
          <img src={user.avater} alt="admin-profile-avater"></img>
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
      <div className="dashboard-main-container">
        <Route exact path="/dashboard" component={Agents} />
        <Route exact path="/dashboard/users" component={Users} />
        <Route exact path="/dashboard/properties" component={Properties} />
        <Route exact path="/dashboard/agent/:id" component={AgentDetails} />
      </div>
    </div>
  );
}

AdminDashboard.defaultProps = {
  user: {
    email: 'Johndoe@gmail.com',
    name: 'John Doe',
    avater: 'https://randomuser.me/api/portraits/men/62.jpg'
  },
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
