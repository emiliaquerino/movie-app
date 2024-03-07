import React, { useContext, useEffect } from "react";
import "../styles/AllFilms.css";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const AllFilms = () => {
  const { fetchMovies, movies, totalResults } = useContext(MovieContext);

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
