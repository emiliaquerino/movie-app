import React, { useContext, useEffect } from "react";
import "../styles/AllFilms.css";
import { MovieContext } from "../context/MovieContext";

const AllFilms = () => {
  const { fetchMovies, movies, totalResults } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>All Films ({totalResults})</h1>
      <div className="movies">
      </div>
    </div>
  );
};

export default AllFilms;
