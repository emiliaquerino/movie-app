import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCardDetails from '../components/MovieCardDetails';
import axios from 'axios';

const API_KEY = "7fcdcab";

function Details() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        if (data.Response === 'True') {
            setMovie(data);
          } else {
            setMovie(null);
          }
        } catch (error) {
          setError('An error occurred while fetching the movie.');
        }
      };
  
      if (id) fetchMovie();
    }, [id]);
  
    return (
      <div className="movies">
        {movie && <MovieCardDetails movie={movie} />}
      </div>
    );
  }
  
  export default Details;