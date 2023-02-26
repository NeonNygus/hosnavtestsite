const startPage = document.querySelector("#start-page");
const chooseCityPage = document.querySelector("#choose-city");
const chooseHospitalPage = document.querySelector("#choose-hospital");
const chooseRoomPage = document.querySelector("#choose-room");
const trackPage = document.querySelector("#track-page");
const successPage = document.querySelector("#success-page");

const chooseClinicButton = document.querySelector("#linkChooseClinic");
chooseClinicButton.addEventListener("click", () => {
  startPage.classList.add("hidden");
  chooseCityPage.classList.remove("hidden");
});

function chosenCity() {
  console.log("dupadupad");
}
