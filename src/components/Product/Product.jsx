import './product.scss';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import productImg from '../../assets/png/background.png';
import star from '../../assets/png/star.png';
import distance from '../../assets/png/location.png';
import add from '../../assets/png/add.png';

import fetchProducts from '../../redux/actions/products';

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products?.productsData.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products?.productsData.length]);

  console.log(`productsData`, products?.productsData?.data);
  console.log(`products`, products);

  return (
    <div className="productWrapper">
      {products?.productsData?.data?.length > 0 &&
        products?.productsData?.data?.map((pd) => (
          <div className="product" key={pd.id}>
            <div className="productImg">
              <img src={productImg} alt="productImg" />
            </div>

            <div className="productDetail">
              <h5 className="productName">{pd.name}</h5>
              <p className="productDetailP">{pd.desc}</p>

              <div className="detail">
                <div className="star">
                  <img src={star} alt="star" />
                  <p>{pd.star}</p>
                </div>

                <div className="distance">
                  <img src={distance} alt="distance" />
                  <p>{pd.location} km</p>
                </div>

                <div className="productPrice">
                  <p className="productDetailPrice">₺</p>
                  <p className="productDetailPriceP">{pd.price} TL</p>
                </div>
              </div>

              <button className="btnAdd" type="submit">
                <img src={add} alt="add" /> SEPETE EKLE
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
