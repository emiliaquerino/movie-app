import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteMovie from "./FavoriteMovie";
import ImdbLogo from "../assets/imdb-logo-home.png";

import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      </div>
      <div className="movie-info">
        <h2>{movie.Title}</h2>
        <div className="movie-metadata">
          <span className="movie-genre">{movie.Genre}</span>
          <span className="movie-rating">
            <img src={ImdbLogo} alt="imdb logo" /> {movie.imdbRating}
          </span>
        </div>
        <p className="movie-description">{movie.Plot}</p>
        <div className="movie-actions">
          <FavoriteMovie movie={movie} />
          <Link to={`details/${movie.imdbID}`} className="btn-black">
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
