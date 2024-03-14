import React from 'react';

const SortMoviesByImdb = ({ sortOrder, onSortChange }) => {
  return (
    <div>
      <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)} defaultValue="">
        <option value="">SORT BY IMDB</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortMoviesByImdb;
