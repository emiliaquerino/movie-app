import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const FavoriteMovie = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useContext(MovieContext);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie.imdbID));
  }, [movie, isFavorite]);

  return (
    <Link onClick={() => toggleFavorite(movie)} className={favorite ? 'btn-black' : 'btn-white'}>
      {favorite ? 'REMOVE FROM WATCHLIST' : 'ADD TO WATCHLIST'}
    </Link>
  );
};

export default FavoriteMovie;