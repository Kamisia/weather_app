import { CiSearch } from "react-icons/ci";

const SearchForm = ({ handleSubmit, handleInputChange, location }) => {
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter location"
        />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
