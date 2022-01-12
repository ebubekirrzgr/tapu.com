import './signIn.scss';

import React from 'react';

import Button from '../../components/Button/Button';
import Form from '../../components/Form';
import Location from '../../components/Location';

function SignIn() {
  return (
    <div className="signInWrapper">
      <div className="h1Container">
        <h1 className="signUpH1">Account</h1>
      </div>

      <div className="formContainer">
        <Form />
      </div>

      <div className="locationContainer">
        <Location />
      </div>

      <div className="buttonContainer">
        <Button
          type="submit"
          theme="secondary"
          size="default"
          className="styledButton"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
