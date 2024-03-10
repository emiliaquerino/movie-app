import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const API_KEY = "7fcdcab";

const Home = () => {
  const [movie, setMovie] = useState();

  const SearchMovie = async (title) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`
      );
      const data = response.data;
      if ("Title" in data) {
        setMovie(data);
      }else{
        setMovie(null);
      }
      
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  return (
    <div>
      <h1>What would you like to watch?</h1>
      <input placeholder="Enter a movie title" onChange={(e) => SearchMovie(e.target.value)}/>
        

      <div className="movies">
        {movie && <MovieCard movie={movie} />}
      </div>
    </div>
  );
};

export default Home;
