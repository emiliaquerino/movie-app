import FavoriteMovie from "./FavoriteMovie";
import ImdbLogo from "../assets/imdb-logo-home.png";

import "../styles/MovieCard.css";

const MovieCardDetails = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      </div>
      <div className="movie-info">
        <h1>{movie.Title}</h1>
        <div className="movie-metadata">
          <span className="movie-genre">{movie.Genre}</span>
          <span className="movie-rating">
          <img src={ImdbLogo} alt="imdb logo" /> {movie.imdbRating}
          </span>
        </div>
        <p className="movie-description">{movie.Plot}</p>
        <div className="movie-actions">
        <FavoriteMovie movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;