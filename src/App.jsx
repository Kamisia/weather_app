import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";
const App = () => {
  const [location, setLocation] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() !== "") {
      setIsFetching(true);
    }
  };

  const fetchWeather = async (location) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    const response = await axios.get(url);
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => fetchWeather(location),
    enabled: isFetching,
  });
  const handleInputChange = (e) => {
    setLocation(e.target.value);
    setIsFetching(false);
  };

  return (
    <>
      <Header />
      <SearchForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        location={location}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching weather data</div>}
      {data && <WeatherCard data={data} />}
    </>
  );
};

export default App;
