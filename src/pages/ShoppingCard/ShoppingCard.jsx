import './shoppingCard.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../redux/actions/products';
import Product from '../../components/Product';
import Price from '../../components/Price';

import spinner from '../../assets/spinner.gif';

function ShoppingCard() {
  const { isFetching, isError } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(fetchProducts);
    }

    return () => {
      mounted = false;
    };
  }, [dispatch]);

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
