import React from 'react';
import '../../assets/css/admin-dashboard.css';
import Search from '../../components/search';

export default function DashboardHeader(props) {
  return (
    <div className="main-header">
      <div className="main-header-collapse-handler">
        <img src={require('../../assets/images/icons/collapse-left.svg')} alt="collapse-icon"></img>
      </div>
      <Search {...props} />
    </div>
  );
}
