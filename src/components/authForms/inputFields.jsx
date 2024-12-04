import React from "react";
import './App.css';


const InputField = ({ iconClass, type, name, placeholder }) => {
  return (
    <div className="info">
      <i className={iconClass}></i>
      <input type={type} name={name} placeholder={placeholder} required />
    </div>
  );
};

export default InputField;
