/* eslint-disable default-param-last */
import SIGNIN from '../constants/signin';

const initialState = {
  signInData: {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
  },
  isFetching: false,
  isError: false,
  error: '',
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN.SIGNIN_PENDING:
      return {
        ...state,
        isFetching: true,
        signInData: {
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password'),
        },
        isError: false,
      };

    case SIGNIN.SIGNIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        signInData: action.payload,
        isError: false,
      };

    case SIGNIN.SIGNIN_ERROR:
      return {
        ...state,
        isFetching: false,
        signInData: {
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password'),
        },
        isError: true,
        error: action.payload,
      };

    case SIGNIN.FETCH_USER:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };

    case SIGNIN.FETCH_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default signIn;
