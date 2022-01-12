import './location.scss';

import React from 'react';

function Location() {
  return (
    <div className="locationWrapper">
      <select name="locale" id="locale">
        <option value="turkish">Türkçe</option>
        <option value="english">English</option>
        <option value="german">Deutsch</option>
      </select>
    </div>
  );
}

export default Location;
