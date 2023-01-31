let currentTemp = document.getElementById("current-temp");
let weatherIcon = document.getElementById("weather-icon");
let cityName = document.getElementById("city-name");
let cityDescription = document.getElementById("city-description");
let feelsDetail = document.getElementById("feels-detail");
let windDetail = document.getElementById("wind-detail");
let humidityDetail = document.getElementById("humidity-detail");
let citySelect = document.getElementById("city-select");
let cityBtn = document.getElementById("city-btn");



fiveIcon1.src = 'http://openweathermap.org/img/wn/13d@2x.png'
fiveIcon2.src = 'http://openweathermap.org/img/wn/10d@2x.png'
fiveIcon3.src = 'http://openweathermap.org/img/wn/11d@2x.png'
fiveIcon4.src = 'http://openweathermap.org/img/wn/10d@2x.png'
fiveIcon5.src = 'http://openweathermap.org/img/wn/13d@2x.png'




function currentCondtions(city) {
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0830fec5fefb765b207129fdb7fcdf86&units=imperial`;
  axios({
    method: "get",
    url: apiCall,
  }).then((res) => {
    current.classList.remove('hidden')
    const INFO = res.data;
    console.log(INFO);
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

cityBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentCondtions(citySelect.value);
  fiveDayForecast(citySelect.value)
});
