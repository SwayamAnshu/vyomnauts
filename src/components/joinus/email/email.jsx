import React, { useState, useEffect } from "react";
import "./email.css";
import { addEmail, getEmails } from "../../assets/email/email"; // Assuming getEmails fetches the email list

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    // Fetch the emails when the component loads
    const fetchEmails = () => {
      const emails = getEmails(); // Fetch emails from the external array
      setEmailList(emails);
    };

    fetchEmails();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (email) {
      addEmail(email); // Add the email to the external array
      console.log(`Email added: ${email}`);
      setEmailList((prevList) => [...prevList, email]); // Update the displayed list
      setEmail(""); // Clear the input field after submission
    }
  };
  document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.button'),
      loader = document.querySelector('.loader'),
      check = document.querySelector('.check');
  
  btn.addEventListener('click', function () {
    loader.classList.add('active');    
  });
 
  loader.addEventListener('animationend', function() {
    check.classList.add('active'); 
  });
});


  return (
    <div>
      <form onSubmit={handleSubmit} className="email-input-container">
        <input
          type="email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
          required
        />
        <label>Email Address</label>
        <div className="main">
  <button className="button">Send</button>
        </div>

      </form>

      
    </div>
  );
};

export default EmailInput;
