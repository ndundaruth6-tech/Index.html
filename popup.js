window.onload = function () {
  document.getElementById("welcomePopup").style.display = "flex";
};

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("welcomePopup").style.display = "none";
});
