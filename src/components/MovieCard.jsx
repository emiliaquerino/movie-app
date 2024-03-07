import React from "react";

import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      </div>
      <div className="movie-info">
        <h1>{movie.Title}</h1>
        <div className="movie-actions">
          <button className="btn-details">View Details</button>
          <button className="btn-watchlist">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;