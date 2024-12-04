const emailList = []; // Array to store emails

// Function to add an email to the list
const addEmail = (email) => {
  emailList.push(email);
};

// Function to get all emails
const getEmails = () => {
  return emailList;
};

// Export functions for external use
export { addEmail, getEmails };
