import { GiWindsock } from "react-icons/gi";
import {
  WiThermometer,
  WiBarometer,
  WiHumidity,
  WiUmbrella,
} from "react-icons/wi";

const WeatherCard = ({ data }) => {
  return (
    <div className="single-card">
      <p className="time">{data.location.localtime}</p>
      <h1>{data.location.name}</h1>
      <img src={data.current.condition.icon} alt="weather icon" />
      <div className="info-container">
        <p className="temp">
          <WiThermometer /> {data.current.temp_c}°C
        </p>
        <p>
          <GiWindsock />
          {data.current.wind_kph} km/h {data.current.wind_dir}
        </p>
        <p>
          <WiBarometer /> {data.current.pressure_mb}hPa
        </p>
        <p>
          <WiUmbrella /> {data.current.precip_mm} mm
        </p>
        <p>
          <WiHumidity />
          {data.current.humidity}%
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
