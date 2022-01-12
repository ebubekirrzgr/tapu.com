import './navbar.scss';

import React from 'react';

import { Link } from 'react-router-dom';

import listIcon from '../../assets/png/list.png';
import accountIcon from '../../assets/png/profile.png';

function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="navbarList">
        <Link to="/Home" className="listButton">
          <img src={listIcon} alt="listIcon" />
          <p className="navbarText">List</p>
        </Link>
      </div>
      <div className="navbarAccount">
        <Link to="/Account" className="listButton">
          <img src={accountIcon} alt="accountIcon" />
          <p className="navbarText">Account</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

// <img src={listIcon} alt="listIcon" />
//         <p className="navbarText">List</p>
