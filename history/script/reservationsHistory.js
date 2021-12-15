const reservationHistory = document.querySelector(".reservations-list");

const usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));
const loginAs = JSON.parse(localStorage.getItem("loginAs"));

for (let i of usersFromLocalStorage) {
  if (i.userName === loginAs.userName) {
    if (i.reservationHistory.length) {
      for (let k of i.reservationHistory) {
        const li = document.createElement("li");
        li.textContent = `Reservation for ${k.reservationDate} at ${k.reservationHour} for ${k.reservationNumberOfPeople} people.`;
        reservationHistory.appendChild(li);
      }
    } else {
        const li = document.createElement("li");
        li.textContent = `You don't have any reservaion`;
        reservationHistory.appendChild(li);
    }
  }
}
