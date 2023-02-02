const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const cityName = document.getElementById("city-name");
const cityDescription = document.getElementById("city-description");
const feelsDetail = document.getElementById("feels-detail");
const windDetail = document.getElementById("wind-detail");
const humidityDetail = document.getElementById("humidity-detail");
const citySelect = document.getElementById("city-select");
const cityBtn = document.getElementById("city-btn");
const fiveDay = document.getElementById("five-day");
const fiveDayDiv = document.getElementById("five-day-div");

function currentCondtions(city) {
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0830fec5fefb765b207129fdb7fcdf86&units=imperial`;
  axios({
    method: "get",
    url: apiCall,
  }).then((res) => {
    current.classList.remove("hidden");
    const INFO = res.data;
    const lat = INFO.coord.lat;
    const lon = INFO.coord.lon;
    fiveDayForecast(lat, lon);
    cityName.innerText = INFO.name;
    cityDescription.innerText = INFO.weather[0].description;
    currentTemp.innerHTML = `${Math.round(
      INFO.main.temp
    )}<span class='fahrenheit'>℉</span>`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${INFO.weather[0].icon}@2x.png`;
    feelsDetail.innerText = Math.round(INFO.main.feels_like);
    windDetail.innerText = Math.round(INFO.wind.speed);
    humidityDetail.innerText = INFO.main.humidity;
  });
}

function fiveDayForecast(lat, lon) {
  const apiCall = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0830fec5fefb765b207129fdb7fcdf86&units=imperial`;
  axios({
    method: "get",
    url: apiCall,
  }).then((res) => {
    fiveDayDiv.classList.remove("hidden");
    const INFO = res.data;
    for (let i = 0; i < 40; i += 8) {
      const listNum = INFO.list[i];
      const date = listNum.dt_txt.split(" ")[0];
      const formatDate = dayjs(date).format("MMM DD");
      const icon = listNum.weather[0].icon;
      const high = Math.round(listNum.main.temp_max);
      const low = Math.round(listNum.main.temp_min);
      addData("fiveDate", `day${[i]}`, formatDate);
      addData("fiveIcon", `icon${[i]}`, icon);
      addData("fiveHigh", `high${[i]}`, high);
      addData("fiveLow", `low${[i]}`, low);
    }
  });
}

function addData(type, id, data) {
  switch (type) {
    case "fiveDate":
      document.getElementById(`${id}`).innerText = data;
      break;
    case "fiveIcon":
      document.getElementById(
        `${id}`
      ).src = `http://openweathermap.org/img/wn/${data}@2x.png`;
      break;
    default:
      document.getElementById(`${id}`).innerText = Math.round(data);
  }
}

cityBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentCondtions(citySelect.value);
});
