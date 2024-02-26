import { useGlobalContext } from "../Context";
import { useQuery } from "react-query";
const WeatherCard = () => {
  const { fetchCurrentWeather } = useGlobalContext();

  // Pobieranie danych o pogodzie dla podanego miejsca przez użytkownika
  const { data, isLoading, isError } = useQuery(
    ["weather", "city"],
    () => fetchCurrentWeather("Gdańsk"),
    {
      staleTime: 600000, // Czas ważności danych w milisekundach (10 minut)
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Single Card</h1>
      <div>
        <h2>City: {data.location.name}</h2>
        <p>Temperature: {data.current.temp_c}°C</p>
        <p>Condition: {data.current.condition.text}</p>
        <img src={data.current.condition.icon} />
      </div>
    </div>
  );
};
export default WeatherCard;
