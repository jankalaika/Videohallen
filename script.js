function validateForm() {
  var signupPassword = document.querySelector("#password");
  var confirmPassword = document.querySelector("#confirmPassword");

  if (signupPassword.value !== confirmPassword.value) {
    alert("Passwords dont match!");
    return false;
  }
  return true;
}
