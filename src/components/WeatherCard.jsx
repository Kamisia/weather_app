import { GiWindsock } from "react-icons/gi";
import { WiBarometer, WiHumidity, WiUmbrella } from "react-icons/wi";

const WeatherCard = ({ data }) => {
  return (
    <div className="single-card">
      <div className="title">
        <h1>{data.location.name}</h1>
        <p className="temp">{data.current.temp_c}°C</p>
        <img src={data.current.condition.icon} alt="weather icon" />
      </div>
      <div className="info-container">
        <p>
          <span>
            <GiWindsock />
          </span>
          {data.current.wind_kph} km/h {data.current.wind_dir}
        </p>
        <p>
          <span>
            <WiBarometer />
          </span>
          {data.current.pressure_mb}hPa
        </p>
        <p>
          <span>
            <WiUmbrella />
          </span>
          {data.current.precip_mm} mm
        </p>
        <p>
          <span>
            <WiHumidity />
          </span>
          {data.current.humidity}%
        </p>
      </div>
      <div className="date-container">
        <p>{data.location.localtime}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
