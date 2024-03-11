import React, { useState } from "react";
import "../styles/Home.css";
import MovieCard from "../components/MovieCard";
import SearchInput from "../components/SearchInput";
import axios from "axios";

const API_KEY = "7fcdcab";

const Home = () => {
  const [movie, setMovie] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchMovie = async () => {
    if (!inputValue) {
      setMovie(null);
      return;
    }

    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${inputValue}`
      );
      if (data.Response === "True") {
        setMovie(data);
      } else {
        setMovie(null);
      }
    } catch (error) {
      console.error("Error searching movie:", error);
    }
  };

  return (
    <div>
      <h1>What would you like to watch?</h1>
      <SearchInput
        handleInputChange={handleInputChange}
        handleSubmit={searchMovie}
      />
      <div className="movies">{movie && <MovieCard movie={movie} />}</div>
    </div>
  );
};

export default Home;
