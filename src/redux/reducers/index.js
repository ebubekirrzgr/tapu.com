import { combineReducers } from 'redux';

import SignInReducer from './signin';
import SignUpReducer from './signup';
import ProductsReducer from './products';

export default combineReducers({
  products: ProductsReducer,
  signUp: SignUpReducer,
  signIn: SignInReducer,
});
