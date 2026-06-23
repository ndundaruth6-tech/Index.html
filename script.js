window.onload = function () {
  alert("🍔 Welcome to Kukimoto! Enjoy our delicious meals.");
};

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var genderSelected = document.querySelector('input[name="gender"]:checked');

  clearErrors();

  var valid = true;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.trim() === "") {
    showError("nameError", "Name cannot be blank or spaces only.");
    valid = false;
  }

  if (email.trim() === "") {
    showError("emailError", "Email cannot be blank or spaces only.");
    valid = false;
  } else if (!emailPattern.test(email.trim())) {
    showError("emailError", "Please enter a valid email address (e.g. name@example.com).");
    valid = false;
  }

  if (phone.trim() === "") {
    showError("phoneError", "Phone number cannot be blank or spaces only.");
    valid = false;
  }

  if (!genderSelected) {
    showError("genderError", "Please select a gender.");
    valid = false;
  }

  if (valid) {
    alert("Registration successful! Welcome to Kukimoto, " + name.trim() + "!");
    document.getElementById("myForm").reset();
  }
});

function showError(id, message) {
  var el = document.getElementById(id);
  if (el) {
    el.textContent = message;
    el.style.display = "block";
  }
}

function clearErrors() {
  var errors = document.querySelectorAll(".error-msg");
  errors.forEach(function (el) {
    el.textContent = "";
    el.style.display = "none";
  });
      }
