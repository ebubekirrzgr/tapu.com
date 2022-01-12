import './form.scss';

import React from 'react';

function Form() {
  return (
    <div className="formWrapper">
      <div className="formMail">
        <input placeholder="E-mail" type="text" />
      </div>
      <div className="formPassword">
        <input placeholder="Password" type="password" />
      </div>
    </div>
  );
}

export default Form;
