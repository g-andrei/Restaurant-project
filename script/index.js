const loginRegisterContainer = document.querySelector(
  ".login-register-container"
);
const afterLoginButtonsContainer = document.querySelector(".after-login");
const logOutButton = document.querySelector(".log-out");
const viewAllMenu = document.querySelector(".view-all-menu-button");
const loginToken = JSON.parse(localStorage.getItem("loginToken"));

if (loginToken) {
  loginRegisterContainer.style.display = "none";
  afterLoginButtonsContainer.style.display = "inline";
} else {
  loginRegisterContainer.style.display = "inline";
  afterLoginButtonsContainer.style.display = "none";
}
logOutButton.addEventListener("click", function () {
  let loginToken = false;
  localStorage.setItem("loginToken", loginToken);
  location.reload();
  localStorage.removeItem("loginAs");
});

viewAllMenu.addEventListener(
  "click",
  () => (window.location.href = "./menu/menu.html")
);
