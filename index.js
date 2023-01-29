let currentTemp = document.getElementById('current-temp')
let weatherIcon = document.getElementById('weather-icon')
let cityName = document.getElementById('city-name')
let cityDescription = document.getElementById('city-description')
let feelsDetail = document.getElementById("feels-detail")
let windDetail = document.getElementById("wind-detail")
let humidityDetail = document.getElementById("humidity-detail")

let icon = '13d'
let temper = 160.6

weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`

cityName.innerText = 'Colorado Springs'
cityDescription.innerText = 'Sunny'

currentTemp.innerHTML = `${Math.round(temper)}<span class='fahrenheit'>℉</span>`

feelsDetail.innerText = '150℉'
windDetail.innerText = '450 MPH'
humidityDetail.innerText = '100 %'

function currentCondtions(city) {
    let api 
}