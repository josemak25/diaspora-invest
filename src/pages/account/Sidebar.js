import React from 'react';
import SidebarLink from './Sidebar-Link';

const Sidebar = ({ links }) => {
  const ListItems = links.map((link, index) => (
    <SidebarLink key={index} text={link.name} url={link.url} icon={link.icon} />
  ));
  return (
    <>
      <ul className='myaccount-tab-list nav'>{ListItems}</ul>
    </>
  );
};

export default Sidebar;

Sidebar.defaultProps = {
  links: [
    { name: 'My Profile', url: '#profile-tab', icon: 'pe-7s-user' },
    { name: 'Agency Profile', url: '#agency-tab', icon: 'pe-7s-note2' },
    { name: 'My Properties', url: '#properties-tab', icon: 'pe-7s-photo' },
    { name: 'Add New Property', url: '#profile', icon: 'pe-7s-home' },
    { name: 'Change Password', url: '#password-tab', icon: 'pe-7s-lock' },
    { name: 'Log Out', url: '#profile', icon: 'pe-7s-power' }
  ]
};
