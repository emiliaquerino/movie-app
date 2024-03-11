import React from "react";
import "../styles/MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      </div>
      <div className="movie-info">
        <h1>{movie.Title}</h1>
        <div className="movie-actions">
        <Link to={`details/${movie.imdbID}`} className="btn-black">
          VIEW DETAILS
        </Link>
          <button className="btn-watchlist">REMOVE FROM WATCHLIST</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;