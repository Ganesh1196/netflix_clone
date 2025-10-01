import React, { useEffect, useState } from 'react'
import MovieTile from './MovieTile'


const MovieRow = ({ key, title, movies }) => {
  if (!movies || movies.length === 0) return null


  return (
    <div className='px-[4%] relative z-20'>
      <p className='text-white font-medium text-[1.625rem] mb-2 '>{title}</p>
      <div className='w-full h-72'>

        <div className='flex space-x-3 overflow-x-scroll no-scrollbar'>
          {movies.map(movie => {
            return (

              <MovieTile key={movie.id} imagesrc={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} title={movie.title || movie.name} />

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MovieRow
