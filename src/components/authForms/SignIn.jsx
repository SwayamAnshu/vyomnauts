import React from "react";
import InputField from "./inputFields";
import Button from "./Button";
import './App.css'

const SignInForm = () => {
  return (
    <form action="/check" method="POST">
      <div id="input-box">
        <h1>SignIn</h1>
        <div id="input-field">
          <InputField iconClass="fa-solid fa-envelope" type="email" name="email" placeholder="Email Id" />
          <InputField iconClass="fa-solid fa-lock" type="password" name="password" placeholder="Password" />
        </div>
        <div id="buttons">
        <Button id="signupbtn" text="SignUp" type="submit" />
        <Button id="signinbtn" text="SignIn" type="submit"><Link to='/signin' className='signup'></Link></Button>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
