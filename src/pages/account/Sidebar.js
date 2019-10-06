import React from 'react';
import { connect } from 'react-redux';

import SidebarLink from './Sidebar-Link';

import { logout } from '../../redux/actions/login.action';

const Sidebar = ({ links, logout }) => {
  const ListItems = links.map((link, index) => (
    <SidebarLink key={index} text={link.name} url={link.url} icon={link.icon} />
  ));

  const handleClick = e => {
    e.preventDefault();
    logout();
  }
  return (
    <>
      <ul className="myaccount-tab-list nav">
        {ListItems}
        <li>
          <a href='#logout' data-toggle="tab" onClick={handleClick}>
            <i className="pe-7s-power"></i>
            {'Logout'}
          </a>
        </li>
      </ul>
    </>
  );
};



const mapActionsToProps = {
  logout
}

export default connect(null, mapActionsToProps)(Sidebar);

Sidebar.defaultProps = {
  links: [
    { name: "Personal Profile", url: "#profile-tab", icon: "pe-7s-user" },
    { name: "Agency Profile", url: "#agency-tab", icon: "pe-7s-note2" },
    { name: "My Properties", url: "#properties-tab", icon: "pe-7s-photo" },
    { name: "Add New Property", url: "#profile", icon: "pe-7s-home" },
    // { name: "Change Password", url: "#password-tab", icon: "pe-7s-lock" },
  ]
};
