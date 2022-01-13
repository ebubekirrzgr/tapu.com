import './account.scss';

import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountComponent from '../../components/Account';
import Location from '../../components/Location';
import Button from '../../components/Button/Button';

function Account() {
  const signIn = useSelector((state) => state.signIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (signIn.signInData.email) {
      navigate('/Account');
    } else {
      navigate('/signin');
    }
  }, [navigate, signIn.signInData.email]);

  return (
    <div className="accountPageWrapper">
      <div className="accountH2Container">
        <h2 className="accountPageH2">Account</h2>
      </div>
      <div className="accountContainer">
        <AccountComponent />
      </div>
      <span className="accountLine" />
      <div className="localeContainer">
        <Location />
      </div>
      <div className="logOutButton">
        <Button
          type="submit"
          theme="logOut"
          size="default"
          className="styledButton"
          border="on"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default Account;
