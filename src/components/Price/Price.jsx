import './price.scss';

import React from 'react';

function Price() {
  return (
    <div className="priceWrapper">
      <h3 className="priceH3">Ürünlerin Toplamı:</h3>
      <div className="priceTotal">
        <div className="total">
          <p>Toplam: </p>
          <p>124,35 TL</p>
        </div>
        <div className="tax">
          <p>Vergiler + Kargo:</p>
          <p>21,45 TL</p>
        </div>
        <h4 className="priceH4">Genel Toplam: 145,8 TL</h4>
      </div>
    </div>
  );
}

export default Price;
