import './form.scss';

import React from 'react';

function Form({ errors, values, handleChange }) {
  return (
    <div className="formWrapper">
      <div className={errors.email ? 'errorFormMail' : 'formMail'}>
        <input
          onChange={handleChange}
          placeholder="E-mail"
          type="text"
          value={values.email}
          name="email"
          className={errors.email ? 'errorInput' : 'defaultInput'}
        />
        {errors.email && <p className="errorText">{errors.email}</p>}
      </div>
      <div className={errors.password ? 'errorFormPassword' : 'formPassword'}>
        <input
          onChange={handleChange}
          placeholder="Password"
          type="password"
          value={values.password}
          name="password"
          className={errors.password ? 'errorInput' : 'defaultInput'}
        />
        {errors.password && <p className="errorText">{errors.password}</p>}
      </div>
    </div>
  );
}

export default Form;
