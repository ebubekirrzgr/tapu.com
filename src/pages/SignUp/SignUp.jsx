import './signUp.scss';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpAction } from '../../redux/actions/signup';
import Button from '../../components/Button/Button';
import Form from '../../components/Form';
import Location from '../../components/Location';
import validate from '../../helpers/validateChecker';

import useForm from '../../hooks/useForm';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUp = useSelector((state) => state.signUp);
  const submitForm = (data) => {
    dispatch(signUpAction(data));
  };
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  useEffect(() => {
    if (localStorage.getItem('email')) {
      navigate('/Home');
    }
  }, [navigate, signUp.signUpData.email]);
  return (
    <div className="signUpWrapper">
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
          theme="primary"
          size="default"
          className="styledButton"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
