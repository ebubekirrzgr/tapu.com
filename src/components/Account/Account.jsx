import './account.scss';

import React from 'react';

function Account() {
  return (
    <div className="accountWrapper">
      <h3 className="accountH3">Melih Çalışkan</h3>
      <div className="accountDetail">
        <div className="accountMail">
          <p className="accountP">E-mail :</p>
          <p>mc@tapu.com</p>
        </div>
        <div className="accountPassword">
          <p className="accountP">Password</p>
          <p>123546</p>
        </div>
        <div className="accountLocale">
          <p className="accountP">Current locale:</p>
          <p>TR</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
