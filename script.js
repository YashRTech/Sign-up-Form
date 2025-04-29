const form = document.getElementById('myForm');
const password = document.getElementById('pass');
const confirmPassword = document.getElementById('confPass');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');

form.addEventListener('submit', function (e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    error.textContent = "Passwords do not match!";
    error2.textContent = "Passwords do not match!";
  }
});