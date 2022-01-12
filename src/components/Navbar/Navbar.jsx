import './navbar.scss';

import React from 'react';

import listIcon from '../../assets/png/list.png';
import accountIcon from '../../assets/png/profile.png';

function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="navbarList">
        <img src={listIcon} alt="listIcon" />
        <p className="navbarText">List</p>
      </div>
      <div className="navbarAccount">
        <img src={accountIcon} alt="accountIcon" />
        <p className="navbarText">Account</p>
      </div>
    </div>
  );
}

export default Navbar;
