const reservationDate = document.querySelector("#date-for-reservation");
const reservationHour = document.querySelector("#hour-for-reservation");
const reservationNumberOfPeople = document.querySelector(
  "#number-of-people-reservation"
);
const reservationButton = document.querySelector(".book-now");

reservationButton.addEventListener("click", function () {
  const loginToken = JSON.parse(localStorage.getItem("loginToken"));
  const loginAs = JSON.parse(localStorage.getItem("loginAs"));
  const usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));

  if (reservationDate.value === "") {
    alert("Please select a date!");
  } else {
    if (loginToken === false) {
      alert("In order to make a reservation please log in.");
    } else {
      alert(
        `The reservation was made under the name ${loginAs.firstName} ${loginAs.lastName} on ${reservationDate.value} at ${reservationHour.value} for ${reservationNumberOfPeople.value} people.`
      );
      for (let i of usersFromLocalStorage) {
        if (i.userName === loginAs.userName) {
          i.reservationHistory.push({
            reservationDate: reservationDate.value,
            reservationHour: reservationHour.value,
            reservationNumberOfPeople: reservationNumberOfPeople.value,
          });
          localStorage.setItem("users", JSON.stringify(usersFromLocalStorage));
        }
      }

      reservationDate.value = "";
      reservationHour.selectedIndex = 0;
      reservationNumberOfPeople.selectedIndex = 0;
    }
  }
});
