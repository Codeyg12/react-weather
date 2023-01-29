let icon = '13d'
let temper = 160.6

weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`

currentTemp.innerHTML = `${Math.round(temper)}<span class='fahrenheit'>℉</span>`

function currentCondtions(city) {
    let api 
}