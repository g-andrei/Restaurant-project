const users = [
  {
    firstName: "Andrei",
    lastName: "Gherghiu",
    userName: "agheorghiu",
    password: "parolaandrei",
    phoneNumberFromInput: "0746134973",
    streetFromInput: "Lalelor",
    numberOfBuildingFromInput: 458,
    emailFromInput: "agheorghiu@jmekerie.com",
    cart: [],
    reservationHistory: [],
    isAdmin: true,
  },
  {
    firstName: "Tiberiu",
    lastName: "Analia",
    userName: "atiberiu",
    password: "parolatiberiu",
    phoneNumberFromInput: "0794318795",
    streetFromInput: "Muntilor",
    numberOfBuildingFromInput: 78,
    emailFromInput: "tanalia@jmekerie.com",
    cart: [],
    reservationHistory: [],
    isAdmin: false,
  },
  {
    firstName: "Dragos",
    lastName: "Horia",
    userName: "hdragos",
    password: "paroladragos",
    phoneNumberFromInput: "0795412764",
    streetFromInput: "Bucuresti",
    numberOfBuildingFromInput: 32,
    emailFromInput: "dhoria@jmekerie.com",
    cart: [],
    reservationHistory: [],
    isAdmin: false,
  },
];

const usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));

const userNameFromInput = document.querySelector("#user");
const passwordFromInput = document.querySelector("#password");
const loginButton = document.querySelector("#login_button");

let loginAsUsername = "";
let loginToken = false;
let loginAs = {
  firstName: "",
  lastName: "",
  userName: "",
};

const loginTokenFromLocalStorage = JSON.parse(
  localStorage.getItem("loginToken")
);
let sum = 0;

if (loginTokenFromLocalStorage) window.location.href = "./../index.html";

for (let i of usersFromLocalStorage) {
  if (i.username === "agheorghiu")
    for (let k of i.cart) {
      console.log(`${k.product} costa ${k.price} lei`);
      sum += k.price;
    }
}
console.log(sum);

loginButton.addEventListener("click", function (e) {
  e.preventDefault();

  for (let i of usersFromLocalStorage) {
    if (
      i.userName === userNameFromInput.value &&
      i.password === passwordFromInput.value
    ) {
      loginToken = true;
      loginAsUsername = i.userName;
      loginAs.firstName = i.firstName;
      loginAs.lastName = i.lastName;
      loginAs.userName = i.userName;

      localStorage.setItem("loginAs", JSON.stringify(loginAs));
      break;
    } else {
      loginToken = false;
    }
  }

  if (loginToken === true) {
    alert(`You are login as ${loginAsUsername}`);
    localStorage.setItem("loginToken", loginToken);
    window.location.href = "./../index.html";
  } else {
    alert("user name/password incorect");
  }

  userNameFromInput.value = "";
  passwordFromInput.value = "";
});
