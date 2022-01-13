import axios from 'axios';
import { toast } from 'react-toastify';
import SIGNIN from '../constants/signin';

export const signInPending = () => ({
  type: SIGNIN.SIGNIN_PENDING,
});

export const signInSuccess = (data) => ({
  type: SIGNIN.SIGNIN_SUCCESS,
  payload: data,
});

export const signInError = (err) => ({
  type: SIGNIN.SIGNIN_ERROR,
  payload: err,
});

export const signInAction = (data) => async (dispatch) => {
  dispatch(signInSuccess(data));
  localStorage.setItem('email', data.email);
  localStorage.setItem('password', data.password);

  toast.success('Giriş başarılı!', {
    position: 'top-right',
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const fetchUserError = (error) => ({
  type: SIGNIN.FETCH_USER_ERROR,
  payload: error,
});

export const fetchUsers = (data) => async (dispatch) => {
  dispatch(signInPending());

  let isLoggedIn = false;

  axios
    .get('https://61df30e40f3bdb00179349b1.mockapi.io/api/users')
    .then((res) => {
      for (let i = 0; i < res.data.length; i += 1) {
        if (
          res.data[i].email === data.email &&
          res.data[i].password === data.password
        ) {
          isLoggedIn = true;
        }
      }
      if (isLoggedIn) {
        dispatch(signInAction(data));
      } else {
        toast.error('Giriş başarısız!', {
          position: 'top-right',
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
    .catch((error) => dispatch(fetchUserError(error)));
};
