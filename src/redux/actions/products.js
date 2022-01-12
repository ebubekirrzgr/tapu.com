import axios from 'axios';
import PRODUCTS from '../constants/products';

export const fetchSuccess = (data) => ({
  type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: PRODUCTS.FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const fetchPending = () => ({
  type: PRODUCTS.FETCH_PRODUCTS_PENDING,
});

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchPending());
  axios
    .get('https://61df30e40f3bdb00179349b1.mockapi.io/api/products')
    .then((res) => dispatch(fetchSuccess(res)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchProducts;
