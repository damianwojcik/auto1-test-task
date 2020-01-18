import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, href, secondary, ...props }) => {
  const buttonClass = secondary
    ? 'button__element button__element--secondary'
    : 'button__element';

  return (
    <div className="button__wrapper">
      {href ? (
        <a href={href} className={buttonClass} {...props}>
          Edit
        </a>
      ) : (
        <button className={buttonClass} type="submit" {...props}>
          {children}
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  secondary: PropTypes.bool
};

export default Button;
