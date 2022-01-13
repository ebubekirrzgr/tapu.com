import axios from 'axios';
import { toast } from 'react-toastify';
import SIGNUP from '../constants/signup';

export const signUpPending = () => ({
  type: SIGNUP.SIGNUP_PENDING,
});

export const signUpSuccess = (data) => ({
  type: SIGNUP.SIGNUP_SUCCESS,
  payload: data,
});

export const signUpError = (err) => ({
  type: SIGNUP.SIGNUP_ERROR,
  payload: err,
});

export const signUpAction = (data) => async (dispatch) => {
  dispatch(signUpPending());
  return axios
    .post('https://61df30e40f3bdb00179349b1.mockapi.io/api/users', data)
    .then(() => {
      dispatch(signUpSuccess(data));
      localStorage.setItem('email', data.email);
      localStorage.setItem('password', data.password);
      toast.success('Kayıt işlemi başarılı.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      dispatch(signUpError(err));
      toast.error('Hatalı veya eksik bilgi girdiniz.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};
