// import React from 'react';
// import { Link } from 'react-router-dom';
// import FavoriteMovie from './FavoriteMovie';
// import ImdbLogo from '../assets/imdb-logo-home.png';
// import StarIcon from '../assets/star-icon.png';
// import '../styles/MovieCard.css';

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="movie-card">
//       <div className="movie-poster">
//         <img src={movie.Poster} alt={`${movie.Title} poster`} />
//       </div>
//       <div className="movie-info">
//         <h2>{movie.Title}</h2>
//         <div className="movie-metadata">
//           <div className="movie-genres">
//             {movie.Genre.split(', ').map((genre, index) => (
//               <button key={index} className="genre-button">
//                 {genre}
//               </button>
//             ))}
//           </div>
//           <span className="movie-rating">
//             <img src={ImdbLogo} alt="imdb logo" /> {movie.imdbRating}
//             <img src={StarIcon} alt="star icon" />
//           </span>
//         </div>
//         <p className="movie-description">{movie.Plot}</p>
//         <div className="movie-actions">
//           <FavoriteMovie movie={movie} />
//           <Link to={`details/${movie.imdbID}`} className="btn-black">
//             VIEW DETAILS
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

import React from "react";
import { Link } from "react-router-dom";
import FavoriteMovie from "./FavoriteMovie";
import ImdbLogo from "../assets/imdb-logo-home.png";
import StarIcon from "../assets/star-icon.png";
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
          <div className="movie-genres">
            {movie.Genre.split(", ").map((genre, index) => (
              <button key={index} className="genre-button">
                {genre}
              </button>
            ))}
          </div>
          <div className="movie-rating">
            <img src={ImdbLogo} alt="imdb logo" />
            <span>{movie.imdbRating}</span>
            <div className="star">
              <img src={StarIcon} alt="star icon" />
            </div>
          </div>
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
