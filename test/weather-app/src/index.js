function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apiKey = "fcf718b3td9bc91c0f0645642oaa44c2";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}`;
  axios.get(apiURL).then(displayTemp);
}

function displayTemp(response) {
  let tempElement = document.querySelector(".current-temperature-value");
  let newTemp = Math.round(response.data.temperature.current);
  tempElement.innerHTML = newTemp;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function updateCity(response) {}
