let currentTemp = document.getElementById("current-temp");
let weatherIcon = document.getElementById("weather-icon");
let cityName = document.getElementById("city-name");
let cityDescription = document.getElementById("city-description");
let feelsDetail = document.getElementById("feels-detail");
let windDetail = document.getElementById("wind-detail");
let humidityDetail = document.getElementById("humidity-detail");
let citySelect = document.getElementById("city-select");
let cityBtn = document.getElementById("city-btn");
let fiveDay = document.getElementById('five-day')



// fiveIcon1.src = 'http://openweathermap.org/img/wn/13d@2x.png'
// fiveIcon2.src = 'http://openweathermap.org/img/wn/09d@2x.png'
// fiveIcon3.src = 'http://openweathermap.org/img/wn/11d@2x.png'
// fiveIcon4.src = 'http://openweathermap.org/img/wn/04d@2x.png'
// fiveIcon5.src = 'http://openweathermap.org/img/wn/13d@2x.png'




function currentCondtions(city) {
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0830fec5fefb765b207129fdb7fcdf86&units=imperial`;
  axios({
    method: "get",
    url: apiCall,
  }).then((res) => {
    current.classList.remove('hidden')
    const INFO = res.data;
    let lat = INFO.coord.lat
    let lon = INFO.coord.lon
    fiveDayForecast(lat, lon)
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

function fiveDayForecast(lat, lon) {
    let apiCall = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0830fec5fefb765b207129fdb7fcdf86&units=imperial`
    axios({
        method: 'get',
        url: apiCall,
    }).then((res) => {
        const INFO = res.data;
        console.log(INFO)
        for (let i = 0; i < 40; i = i + 8) {
            let listNum = INFO.list[i]
            let date = listNum.dt_txt.split(' ')[0]
            let formatDate = dayjs(date).format('MMM DD')
            let icon = listNum.weather[0].icon
            let high = Math.round(listNum.main.temp_max)
            let low = Math.round(listNum.main.temp_min)
            addData('fiveDate', `day${[i]}`, formatDate)
            // for (let j = 0; j < 5; j++) {
            //     addIcon(j, icon)
            // }
            // addData(fiveDate, formateDate)
            // addData(fiveIcon, icon)
            // addData(fiveHigh, high)
            // addData(fiveLow, low)
            // addData()
            // ! DOESNT WORK ON ACCOUNT OF DUMB NUMBERING
        } 
    })
}

// function addIcon(type, data) {
//         let fiveDayChild = fiveDay.children
//     for (let i = 0; i < fiveDayChild; i++) {
//         [type].innerText = `http://openweathermap.org/img/wn/${data}@2x.png`
//     }
// }

function addData(type, id, data) {
    console.log(id)
    // console.log(data)
// let fiveDayChild = fiveDay.children
// for (let i = 1; i <= fiveDayChild.length; i++) {
    switch (type) {
        case 'fiveDate':
            console.log(data)
                document.getElementById(`${id}`).innerText = data
            break;
        case fiveIcon:
            
            break;
        case fiveHigh:
            
            break;
        case fiveLow:
            
            break;
    
        default:
    }
}
// }

cityBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentCondtions(citySelect.value);
//   fiveDayForecast(citySelect.value)
});
