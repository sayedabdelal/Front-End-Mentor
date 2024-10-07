import React from 'react';
 

// eslint-disable-next-line react/prop-types
const Button = ({ type, className, onClick, children }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
