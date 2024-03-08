import React, { useState, useEffect } from "react";
import "../styles/AllFilms.css";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const API_KEY = "7fcdcab";

const AllFilms = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=harry`
      );
      const data = response.data;
      setMovies(data.Search || []);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>All Films ({totalResults})</h1>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllFilms;
