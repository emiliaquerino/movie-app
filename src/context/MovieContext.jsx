import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  }, []);

  const loadFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  };

  const addFavoriteMovie = (movie) => {
    const updatedFavorites = [...favoriteMovies, movie];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavoriteMovies(updatedFavorites);
  };

  const removeFavoriteMovie = (imdbID) => {
    const updatedFavorites = favoriteMovies.filter(movie => movie.imdbID !== imdbID);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavoriteMovies(updatedFavorites);
  };

  const isFavorite = (imdbID) => {
    return favoriteMovies.some(movie => movie.imdbID === imdbID);
  };

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.imdbID)) {
      removeFavoriteMovie(movie.imdbID);
    } else {
      addFavoriteMovie(movie);
    }
  };

  return (
    <MovieContext.Provider value={{ favoriteMovies, addFavoriteMovie, removeFavoriteMovie, loadFavorites, toggleFavorite, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};