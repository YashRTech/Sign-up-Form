const form = document.getElementById("myForm");
const password = document.getElementById("pass");
const email = document.getElementById("email");
const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const confirmPassword = document.getElementById("confPass");
const error = document.getElementById("error");
const error2 = document.getElementById("error2");

// Errors
const fNameError = document.querySelector(".fName-error");
const lNameError = document.querySelector(".lName-error");
const emailError = document.querySelector(".email-error");
const phoneError = document.querySelector(".phNo-error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhoneNumber();
  if (!form.checkValidity()) {
    return;
  }
  if (password.value !== confirmPassword.value) {
    error.textContent = "Passwords do not match!";
    error2.textContent = "Passwords do not match!";
  }
});

fName.addEventListener("input", validateFirstName);
lName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhoneNumber);

function validateFirstName() {
  if (fName.validity.valueMissing) {
    fNameError.textContent = "Plese enter your first Name";
  } else if (fName.validity.tooShort) {
    fNameError.textContent = "First Name Cannot be less than 3 letters";
  } else if (fName.validity.tooLong) {
    fNameError.textContent = "First Name Cannot be greater than 7 letters";
  } else {
    fNameError.textContent = "";
  }
}
function validateLastName() {
  if (lName.validity.valueMissing) {
    lNameError.textContent = "Plese enter your Last Name";
  } else if (lName.validity.tooShort) {
    lNameError.textContent = "Last Name Cannot be less than 4 letters";
  } else if (lName.validity.tooLong) {
    lNameError.textContent = "Last Name Cannot be greater than 10 letters";
  } else {
    lNameError.textContent = "";
  }
}
function validateEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Plese enter your email";
  } else if (email.validity.patternMismatch) {
    emailError.textContent =
      "Enter a valid email\nEmail should be in below format\nyash@gmail.com";
  } else {
    emailError.textContent = "";
  }
}
function validatePhoneNumber() {
  if (phone.validity.valueMissing) {
    phoneError.textContent = "Plese enter your Phone number";
  } else if (phone.validity.patternMismatch) {
    phoneError.textContent = "Phone number should be on 10 digit";
  } else {
    phoneError.textContent = "";
  }
}
