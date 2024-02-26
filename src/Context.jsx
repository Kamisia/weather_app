import { useContext, createContext, useState } from "react";
import axios from "axios";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //funkcja do obsługi input
  const [query, setQuery] = useState("Gdańsk");
  const handleChange = () => {
    setQuery("Toruń");
  };
  // Funkcja do pobierania danych o aktualnej pogodzie dla konkretnego miasta

  const fetchCurrentWeather = async (city) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch current weather data");
    }
  };

  return (
    <AppContext.Provider
      value={{
        fetchCurrentWeather,
        query,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
