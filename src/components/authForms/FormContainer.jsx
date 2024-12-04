import React, { useState } from "react";
import SignUpForm from "./SignUp"
import SignInForm from "./SignIn"
import './App.css';

const FormContainer = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div id="container">
      {isSignUp ? <SignUpForm /> : <SignInForm />}
      <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button">
        {isSignUp ? "Switch to SignIn" : "Switch to SignUp"}
      </button>
    </div>
  );
};

export default FormContainer;
