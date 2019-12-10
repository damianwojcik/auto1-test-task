import React from 'react';
import './Button.css';

const Button = ({ children, href }) => (
  <div className="button__wrapper">
    {href ? (
      <a href={href} className="button__element">
        Edit
      </a>
    ) : (
      <button className="button__element" type="submit">
        {children}
      </button>
    )}
  </div>
);

export default Button;
