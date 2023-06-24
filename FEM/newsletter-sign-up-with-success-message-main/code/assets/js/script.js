// Select DOM elements
const form = document.querySelector(".newsletter-form");
const emailInput = document.querySelector("#email-input");
const errorMessage = document.querySelector(".error-message");
const newsletterContainer = document.querySelector(".newsletter");
const successContainer = document.querySelector(".success");
const dismissButton = document.querySelector(".dismiss");
const userTypedEmail = document.querySelector(".user-email");

// Get CSS variable values
const primaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--Tomato");

// Validate email on form submit
form.addEventListener("submit", handleSubmit);

// Handle email input change
emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "") {
    clearError();
  }
});

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    showError("Valid email required");
    return;
  }

  showSuccess(email);
}

// Show error message
function showError(message) {
  emailInput.style.backgroundColor = primaryColor;
  emailInput.style.borderColor = primaryColor;
  errorMessage.textContent = message;
}

// Clear error state
function clearError() {
  emailInput.style.backgroundColor = "";
  emailInput.style.borderColor = "";
  errorMessage.textContent = "";
}

// Show success message
function showSuccess(email) {
  newsletterContainer.style.zIndex = "0";
  successContainer.style.zIndex = "99";
  newsletterContainer.style.opacity = "0";
  successContainer.style.opacity = "1";
  userTypedEmail.textContent = email;
}

// Dismiss success message on button click
dismissButton.addEventListener("click", handleDismiss);

// Handle dismiss button click
function handleDismiss() {
  newsletterContainer.style.zIndex = "99";
  successContainer.style.zIndex = "0";
  newsletterContainer.style.opacity = "1";
  successContainer.style.opacity = "0";
}

// Validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
