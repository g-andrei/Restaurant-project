const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", back);

function back() {
  window.history.back();
}