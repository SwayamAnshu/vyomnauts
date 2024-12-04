import React from "react";
import './App.css';

const Button = ({ id, text, type, onClick }) => {
  return (
    <button id={id} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
