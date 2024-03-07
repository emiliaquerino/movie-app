import React, { createContext, useState } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const API_KEY = '7fcdcab';

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=harry`);
      const data = response.data;
      setMovies(data.Search || []);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };
  return (
    <MovieContext.Provider
      value={{
        movies,
        totalResults,
        fetchMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
