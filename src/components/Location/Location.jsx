import './location.scss';

import React from 'react';

function Location() {
  return (
    <div className="locationWrapper">
      <div className="localePContainer">
        <p className="localeP">Locale</p>
      </div>
      <div className="dropdown">
        <select name="locale" id="locale">
          <option value="turkish">Türkçe</option>
          <option value="english">English</option>
          <option value="german">Deutsch</option>
        </select>
      </div>
    </div>
  );
}

export default Location;
