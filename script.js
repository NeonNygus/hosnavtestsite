const startPage = document.querySelector("#start-page");
const chooseCityPage = document.querySelector("#choose-city");
const chooseHospitalPage = document.querySelector("#choose-hospital");
const chooseDoctorPage = document.querySelector("#choose-doctor");
const trackPage = document.querySelector("#track-page");
const track = document.querySelector("#track");
const successPage = document.querySelector("#success-page");

const chooseClinicButton = document.querySelector("#linkChooseClinic");
chooseClinicButton.addEventListener("click", () => {
  startPage.classList.add("hidden");
  chooseCityPage.classList.remove("hidden");
});

function chosenCity() {
  chooseCityPage.classList.add("hidden");
  chooseHospitalPage.classList.remove("hidden");
}

function chosenHospital() {
  chooseHospitalPage.classList.add("hidden");
  chooseDoctorPage.classList.remove("hidden");
  track.classList.remove("hidden");
}

function chosenDoctor() {
  chooseDoctorPage.classList.add("hidden");
  trackPage.classList.remove("hidden");
}

track.addEventListener("click", () => {
  trackPage.classList.add("hidden");
  track.classList.add("hidden");
  successPage.classList.remove("hidden");
});
