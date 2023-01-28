export default function CurrentWeather() {
    let icon = '13d'
    
  return (
    <>
      <div className="current-weather-card">
        <div className="city-info">
          <p className="name">Denver</p>
          <p className="description">Cloudy</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="weather-icon" />
        <div className="temp">{18}℉</div>
        <div className="feels-like">
          <span className="label">Feels Like</span>
          <span className="detail">{2}℉</span>
        </div>
        <div className="wind">
          <span className="label">Wind Speed</span>
          <span className="detail">{45}MPH</span>
        </div>
        <div className="humid">
          <span className="label">Humidity</span>
          <span className="detail">{77}%</span>
        </div>
      </div>
    </>
  );
}
