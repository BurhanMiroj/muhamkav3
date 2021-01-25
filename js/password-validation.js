const passwordToggleShow = document.querySelector(".toggle-password-input input");
passwordToggleShow.addEventListener("click", function() {
  const inputPasswordArea = document.querySelector(".input-password-custom");
  if (inputPasswordArea.type === "password") {
    inputPasswordArea.type = "text";
  } else {
    inputPasswordArea.type = "password";
  }
})