import React, { useContext, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from '../context/MovieContext';
import Pagination from "../components/Pagination";
import SortMoviesByImdb from "../components/SortMoviesByImdb";
import FilterMovieByGenre from "../components/FilterMovieByGenre";
import { Link } from "react-router-dom";

const WatchList = () => {
  const { favoriteMovies } = useContext(MovieContext);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const filteredMovies = selectedGenre
    ? favoriteMovies.filter(movie => movie.Genre.split(', ').includes(selectedGenre))
    : favoriteMovies;

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    const ratingA = parseFloat(a.imdbRating);
    const ratingB = parseFloat(b.imdbRating);
    return sortOrder === 'asc' ? ratingA - ratingB : ratingB - ratingA;
  });

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = sortedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(sortedMovies.length / moviesPerPage);

  return (
    <div>
      <h1>Watchlist ({sortedMovies.length})</h1>
      <SortMoviesByImdb sortOrder={sortOrder} onSortChange={setSortOrder} />
      <FilterMovieByGenre onGenreChange={setSelectedGenre} />
      <div className="movies">
        {currentMovies.length > 0 ? (
          currentMovies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <>
            <p>NENHUM FILME NA SUA WATCHLIST</p>
            <Link to={`/`} className="btn-white">
              ADICIONAR FILMES
            </Link>
          </>
        )}
      </div>
      {sortedMovies.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={() => setCurrentPage(currentPage + 1)}
          onPrev={() => setCurrentPage(currentPage - 1)}
        />
      )}
    </div>
  );
};

export default WatchList;
