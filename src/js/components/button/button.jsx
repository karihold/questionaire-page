import React from 'react';
import './button.scss';

const Button = ({ onClick, label, isDisabled }) => {
  return (
    <button type="button" onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
