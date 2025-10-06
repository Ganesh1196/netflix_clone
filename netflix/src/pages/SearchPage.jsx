

import React from 'react'
import MovieGrid from '../components/MovieGrid';

const SearchPage = ({ searchedMovies, searchValue, isSearching }) => {
  return (
    <div className="bg-black min-h-screen text-white">      
      <MovieGrid movies={searchedMovies} searchValue={searchValue} />
    </div>
  );
};
export default SearchPage