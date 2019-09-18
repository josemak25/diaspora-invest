import React from 'react';
import SidebarLink from './Sidebar-Link';

const Sidebar = ({ links }) => {
  const ListItems = links.map(link => (
    <SidebarLink linkTitle={link.name} linkTarget={link.url} />
  ));
  return (
    <>
      <ul className='myaccount-tab-list nav'>{ListItems}</ul>
    </>
  );
};

export default Sidebar;
