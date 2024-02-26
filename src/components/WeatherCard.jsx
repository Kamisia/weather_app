import { useGlobalContext } from "../Context";
import { useQuery } from "react-query";
import { GiWindsock } from "react-icons/gi";
import {
  WiThermometer,
  WiBarometer,
  WiHumidity,
  WiUmbrella,
} from "react-icons/wi";

const WeatherCard = () => {
  const { fetchCurrentWeather, query } = useGlobalContext();

  // Pobieranie danych o pogodzie dla podanego miejsca przez użytkownika
  const { data, isLoading, isError } = useQuery(
    ["weather", "city"],
    () => fetchCurrentWeather(query),
    {
      staleTime: 600000, // Czas ważności danych w milisekundach (10 minut)
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="single-card">
      <p className="time">{data.location.localtime}</p>
      <h1>{data.location.name}</h1>
      <img src={data.current.condition.icon} />
      <div className="info-container">
        <p className="temp">
          <WiThermometer /> {data.current.temp_c}°C
        </p>
        <div className="wind-info">
          <p className="temp">
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
    </div>
  );
};
export default WeatherCard;
