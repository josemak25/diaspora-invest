import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ linkTitle, linkTarget }) => {
  return (
    <li>
      <a href={linkTarget} data-toggle='tab'>
        <i class='pe-7s-user'></i>
        {linkTitle}
      </a>
    </li>
  );
};

export default SidebarLink;
