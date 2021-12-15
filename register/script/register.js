const loginTokenFromLocalStorage = JSON.parse(
  localStorage.getItem("loginToken")
);
if (loginTokenFromLocalStorage) window.location.href = "./../index.html";

const firstNameFromInput = document.querySelector("#firstName");
const lastNameFromInput = document.querySelector("#lastName");
const userNameFromInput = document.querySelector("#userName");
const phoneNumberFromInput = document.querySelector("#phoneNumber");
const streetFromInput = document.querySelector("#street");
const numberOfBuildingFromInput = document.querySelector("#numberOfBuilding");
const emailFromInput = document.querySelector("#email");
const passwordFromInput = document.querySelector("#password");
const confirmPasswordFromInput = document.querySelector("#confirmPassword");

const signUpButton = document.querySelector("#signUpButton");

passwordFromInput.addEventListener("input", function () {
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;

  for (let char of passwordFromInput.value) {
    if (!isNaN(Number(char))) {
      hasNumber = true;
    } else if (char === char.toUpperCase()) {
      hasUppercase = true;
    } else if (char === char.toLowerCase()) {
      hasLowercase = true;
    }
  }

  if (!hasUppercase || !hasLowercase || !hasNumber) {
    passwordFromInput.style.border = "3px solid #ff0000";
  } else {
    passwordFromInput.style.border = "3px solid #006200";
  }
});

confirmPasswordFromInput.addEventListener("input", function () {
  if (confirmPasswordFromInput.value === passwordFromInput.value) {
    confirmPasswordFromInput.style.border = "3px solid #006200";
  } else {
    confirmPasswordFromInput.style.border = "3px solid #ff0000";
  }
});

signUpButton.addEventListener("click", function (e) {
  e.preventDefault();
  const usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));

  // console.log(`
  // First name: ${firstNameFromInput.value}
  // Last name: ${lastNameFromInput.value}
  // User name: ${userNameFromInput.value}
  // Phone number: ${phoneNumberFromInput.value}
  // Street: ${streetFromInput.value}
  // Number: ${numberOfBuildingFromInput.value}
  // Email: ${emailFromInput.value}
  // Pass: ${passwordFromInput.value}
  // Pass repet: ${confirmPasswordFromInput.value}
  // `);
  usersFromLocalStorage.push({
    firstName: firstNameFromInput.value,
    lastName: lastNameFromInput.value,
    userName: userNameFromInput.value,
    phoneNumber: phoneNumberFromInput.value,
    streetName: streetFromInput.value,
    buildingNumber: numberOfBuildingFromInput.value,
    email: emailFromInput.value,
    password: passwordFromInput.value,
    cart: [],
    reservationHistory: [],
    isAdmin: false,
  });

  localStorage.setItem("users", JSON.stringify(usersFromLocalStorage));

  firstNameFromInput.value = "";
  lastNameFromInput.value = "";
  userNameFromInput.value = "";
  phoneNumberFromInput.value = "";
  streetFromInput.value = "";
  numberOfBuildingFromInput.value = "";
  emailFromInput.value = "";
  passwordFromInput.value = "";
  confirmPasswordFromInput.value = "";
  window.location.href = "./../login/login.html";
});

phoneNumberFromInput
streetFromInput
numberOfBuildingFromInput
emailFromInput
