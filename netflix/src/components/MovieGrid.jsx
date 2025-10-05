import React from 'react'
import MovieTile from './MovieTile'

const MovieGrid = ( {movies} ) => {
  if (!movies || movies.length === 0) return null
  return (
    <div className=" px-8 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
      {movies.map(movie => {
        return (
           <div className="w-full bg-[#141414] rounded-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 mt-24">
      {/* Poster Image */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <p className="text-xs sm:text-sm md:text-base font-medium text-white text-center p-1 truncate">
        {movie.title || movie.name}
      </p>
    </div>
        )
      })}
    </div>
  )
}

export default MovieGrid
