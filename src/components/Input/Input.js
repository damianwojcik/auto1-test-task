import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, name, label, maxLength, ...props }) => (
  <div className="form__item">
    <input
      type={type}
      name={name}
      id={name}
      maxLength={maxLength}
      placeholder=" "
      required={name !== 'avatarUrl'}
      {...props}
    />
    <label htmlFor={name}>{label}</label>
    <div className="forms__item__bar"></div>
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired
};

Input.defaultProps = {
  type: 'text',
  maxLength: 200
};

export default Input;
