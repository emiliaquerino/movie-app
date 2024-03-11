import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FavoriteMovie = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some(favorite => favorite.imdbID === movie.imdbID);
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(favorite => favorite.imdbID !== movie.imdbID);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    setIsFavorite(checkFavorite());
  }, []);

  return (
    <>
      <Link onClick={toggleFavorite} className={isFavorite ? 'btn-black' : 'btn-white'}>
        {isFavorite ? 'REMOVE FROM WATCHLIST' : 'ADD TO WATCHLIST'}
      </Link>
    </>
  );
};

export default FavoriteMovie;
