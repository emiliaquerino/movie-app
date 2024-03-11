import "../styles/SearchInput.css";
import Lupa from "../assets/lupa.png";

const SearchInput = ({ handleInputChange, handleSubmit }) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        onChange={handleInputChange}
        className="search-input"
        placeholder="Enter a movie title"
      />
      <button onClick={handleSubmit} className="search-btn">
        <img src={Lupa} alt="lupa"/>
      </button>
    </div>
  );
};

export default SearchInput;
