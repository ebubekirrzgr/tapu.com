/* eslint-disable default-param-last */
import SIGNUP from '../constants/signup';

const initialState = {
  signUpData: {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
  },
  isFetching: false,
  isError: false,
  error: '',
};

function signUp(state = initialState, action) {
  switch (action.type) {
    case SIGNUP.SIGNUP_PENDING:
      return { ...state, isFetching: true, isError: false };
    case SIGNUP.SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        signUpData: action.payload,
        isError: false,
      };
    case SIGNUP.SIGNUP_ERROR:
      return {
        ...state,
        isFetching: false,
        signUpData: { email: '', password: '' },
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default signUp;
