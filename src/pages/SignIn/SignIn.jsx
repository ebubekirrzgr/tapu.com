import './signIn.scss';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../redux/actions/signin';

import Button from '../../components/Button/Button';
import Form from '../../components/Form';
import Location from '../../components/Location';

import useForm from '../../hooks/useForm';
import validate from '../../helpers/validateChecker';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = useSelector((state) => state.signIn);

  const submitForm = (data) => {
    dispatch(fetchUsers(data));
    console.log(`data`, data);
  };

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  useEffect(() => {
    if (signIn.signInData.email) {
      navigate('/Home');
    }
  }, [navigate, signIn.signInData.email]);

  return (
    <div className="signInWrapper">
      <div className="h1Container">
        <h1 className="signUpH1">Account</h1>
      </div>

      <div className="formContainer">
        <Form handleChange={handleChange} values={values} errors={errors} />
      </div>

      <div className="locationContainer">
        <Location />
      </div>

      <div className="buttonContainer">
        <Button
          type="button"
          theme="secondary"
          size="default"
          className="styledButton"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
