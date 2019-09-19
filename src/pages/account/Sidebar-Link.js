import React from 'react';

const SidebarLink = ({ text, url, icon }) => {
  return (
    <li>
      <a href={url} data-toggle='tab'>
        <i className={icon}></i>
        {text}
      </a>
    </li>
  );
};

export default SidebarLink;
