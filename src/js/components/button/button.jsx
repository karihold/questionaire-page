import React from "react";
import "./button.scss";

const Button = ({ onClick, label }) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
