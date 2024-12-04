import React from "react";
import InputField from "./inputFields";
import Button from "./Button";
import './App.css';
import SignInForm from "./SignIn";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  return (
    <div id="container">
      <form action="/submit" method="POST">
        <div id="input-box">
          <h1>SignUp</h1>
          <div id="input-field">
            <InputField iconClass="fa-solid fa-user" type="text" name="name" placeholder="Enter your username" />
            <InputField iconClass="fa-solid fa-envelope" type="email" name="email" placeholder="Enter your Email" />
            <InputField iconClass="fa-solid fa-lock" type="password" name="password" placeholder="Set a Password" />
          </div>
          <div id="buttons">
            <Button id="signupbtn" text="SignUp" type="submit" />
            <Button id="signinbtn" text="SignIn" type="submit"><Link to='/signin' className='signup'></Link></Button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
