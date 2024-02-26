import WeatherCard from "./WeatherCard";

const SearchForm = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="city..."></input>
        <button>Search</button>
      </div>

      <WeatherCard />
    </>
  );
};

export default SearchForm;
