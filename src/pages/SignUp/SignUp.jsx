import './signUp.scss';

import React from 'react';

import Button from '../../components/Button/Button';
import Form from '../../components/Form';
import Location from '../../components/Location';

function SignUp() {
  return (
    <div className="signUpWrapper">
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
          theme="primary"
          size="default"
          className="styledButton"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
