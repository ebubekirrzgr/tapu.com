import './shoppingCard.scss';

import React from 'react';
import Product from '../../components/Product';
import Price from '../../components/Price';

function ShoppingCard() {
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
