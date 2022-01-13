import './shoppingCard.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchProducts from '../../redux/actions/products';
import Product from '../../components/Product';
import Price from '../../components/Price';

import spinner from '../../assets/spinner.gif';

function ShoppingCard() {
  const { isFetching, isError } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const signIn = useSelector((state) => state.signIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (signIn.signInData.email) {
      navigate('/Home');
    } else {
      navigate('/SignIn');
    }
    let mounted = true;

    if (mounted) {
      dispatch(fetchProducts);
    }

    return () => {
      mounted = false;
    };
  }, [dispatch, navigate, signIn.signInData.email]);

  if (isFetching)
    return (
      <div className="spinner">
        <img src={spinner} alt="spinner" />
      </div>
    );
  if (isError) return <h1>Fetching error </h1>;

  return (
    <div className="shoppingCardWrapper">
      <div className="productListContainer">
        <div className="productContainer">
          <Product />
        </div>
      </div>
      <span className="shoppingCardLine" />
      <div className="priceContainer">
        <Price />
      </div>
    </div>
  );
}

export default ShoppingCard;
