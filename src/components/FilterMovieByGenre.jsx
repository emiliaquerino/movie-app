import React from 'react';

const FilterMovieByGenre = ({ onGenreChange }) => {
  const genres = ["Action", "Crime", "Drama", "Biography", "Romance", "Sci-Fi"];

  return (
    <div>
      <select onChange={(e) => onGenreChange(e.target.value)} defaultValue="">
        <option value="">GENRE</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterMovieByGenre;