//import { useState } from "react";
const SearchForm = () => {
  //const [city, setCity] = useState("");

  return (
    <div className="search-container">
      <input type="text" placeholder="city..."></input>
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;
