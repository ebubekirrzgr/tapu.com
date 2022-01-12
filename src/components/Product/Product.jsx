import './product.scss';

import React from 'react';

import productImg from '../../assets/png/background.png';
import star from '../../assets/png/star.png';
import distance from '../../assets/png/location.png';
import add from '../../assets/png/add.png';

function Product() {
  return (
    <div className="productWrapper">
      <div className="productImg">
        <img src={productImg} alt="productImg" />
      </div>
      <div className="productDetail">
        <h5 className="productName">Villa Bosphorus</h5>
        <p className="productDetailP">Lorem Ipsum Sit Dolor Met</p>
        <div className="detail">
          <div className="star">
            <img src={star} alt="star" />
            <p>3.9</p>
          </div>
          <div className="distance">
            <img src={distance} alt="distance" />
            <p>3.7 km</p>
          </div>
          <div className="productPrice">
            <p className="productDetailPrice">₺</p>
            <p className="productDetailPriceP">250 TL</p>
          </div>
        </div>
        <button className="btnAdd" type="submit">
          <img src={add} alt="add" /> SEPETE EKLE
        </button>
      </div>
    </div>
  );
}

export default Product;
