import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (inputEmail) => {
    if (inputEmail.trim() === "") {
      return setErrorMessage("Please enter your email address."); // Set error message if email is empty
    } else if (!isValidEmail(inputEmail)) {
      return setErrorMessage("Please enter a valid email address."); // Set error message if email is not valid
    } else {
      return setErrorMessage(""); // Clear error message if email is valid
    }
  };

  const handleInputChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail(email); // Validate email before submitting the form

    if (!errorMessage) {
      // Reset form
      setEmail("");
    }
    setEmail("");
  };

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          value={email}
          onChange={handleInputChange}
        />

        <div className="action-container">
          {errorMessage && (
            <img src="/images/icon-error.svg" alt="" className="error-icon" />
          )}
          <button type="submit">
            <img src="/images/icon-arrow.svg" alt="" />
          </button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Form;
