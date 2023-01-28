import './current.css'

export default function CurrentWeather() {
  let icon = "13d";

  return (
    <>
      <div className="current">
        <div className="current-weather-card">
          <div className="left">
            <div className="temp">{18}℉</div>
            <div className="city-info">
              <p className="name">Denver</p>
              <p className="description">Cloudy</p>
            </div>
          </div>
          <div className="right">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather-icon"
              className="weather-icon"
            />
            <div className="details">
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
          </div>
        </div>
      </div>
      {/* <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMycwaEKLYe5fFJUjN3aEVF%2FUntitled%3Fnode-id%3D0%253A1%26t%3DbBjAVLDBZgMTyIPy-1"
        allowfullscreen
      ></iframe> */}
    </>
  );
}
