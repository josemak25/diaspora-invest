import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SidebarLink from './Sidebar-Link';
import { useSelector } from 'react-redux';

import { logout } from '../../redux/actions/login.action';

const Sidebar = ({ links, logout }) => {
  const { user_type } = useSelector(({ auth }) => auth.user);
  const {
    agencyProfile: { isApproved }
  } = useSelector(({ account }) => account);

  const ListItems = links.map((link, index) => {
    if (
      link.name === 'Agency Profile' &&
      (user_type !== 'seller' ||
        (user_type === 'seller' && !isApproved && link.name === 'Agency Profile'))
    ) {
      return null;
    }
    if (link.name === 'My Properties' && user_type === 'admin') {
      return null;
    } else if (link.name === 'My Properties' && user_type === 'investor') {
      link.name = 'Bookmarked Properties';
    }
    return <SidebarLink key={index} text={link.name} url={link.url} icon={link.icon} />;
  });

  const handleClick = e => {
    e.preventDefault();
    logout();
  };
  return (
    <>
      <ul className="myaccount-tab-list nav">
        {ListItems}
        {user_type === 'seller' && isApproved && (
          <li>
            <Link to="/add-properties">
              <i className="pe-7s-home adjust"></i>
              {'Add New Property'}
            </Link>
          </li>
        )}
        <li>
          <a href="#logout" data-toggle="tab" onClick={handleClick}>
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
};

export default connect(
  null,
  mapActionsToProps
)(Sidebar);

Sidebar.defaultProps = {
  links: [
    { name: 'Personal Profile', url: '#profile-tab', icon: 'pe-7s-user' },
    { name: 'Agency Profile', url: '#agency-tab', icon: 'pe-7s-note2' },
    { name: 'My Properties', url: '#properties-tab', icon: 'pe-7s-photo' }
  ]
};
