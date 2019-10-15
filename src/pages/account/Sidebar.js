import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import SidebarLink from './Sidebar-Link';
import { useSelector } from 'react-redux';

import { isUserType } from "../../utils/roles";
import { logout } from '../../redux/actions/login.action';

const isSeller = isUserType("seller");

const Sidebar = ({ links, logout }) => {
  const { user_type } = useSelector(({auth}) => auth.user );
  const { hasAgency } = useSelector(({ account }) => account);

  const ListItems = links.map((link, index) => {
    if (
      (user_type !== "seller" && link.name === "Agency Profile") ||
      (user_type === "seller" && !hasAgency && link.name === "Agency Profile")
    ) {
      return null;
    };
    return <SidebarLink key={index} text={link.name} url={link.url} icon={link.icon} />
  });

  const handleClick = e => {
    e.preventDefault();
    logout();
  }
  return (
    <>
      <ul className="myaccount-tab-list nav">
        {ListItems}
        {(user_type === "seller" && hasAgency) && (
          <li>
            <NavLink to="/add-properties">
              <i className="pe-7s-home adjust"></i>
              {"Add New Property"}
            </NavLink>
          </li>
        )}
        <li>
          <a href="#logout" data-toggle="tab" onClick={handleClick}>
            <i className="pe-7s-power"></i>
            {"Logout"}
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
  ]
};
